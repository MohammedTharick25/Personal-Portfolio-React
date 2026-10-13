import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  Bot,
  LoaderCircle,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const suggestedQuestions = [
  "What projects has Mohammed built?",
  "What technologies does he use?",
  "How can I get in touch?",
];

const MAX_HISTORY_MESSAGES = 6;
const MAX_ASSISTANT_HISTORY_CHARS = 2500;
const MAX_CHAT_REQUEST_BYTES = 11000;

const buildChatRequestBody = (history, userMessage) => {
  const messages = [...history, userMessage]
    .slice(-MAX_HISTORY_MESSAGES)
    .map((message) => ({
      role: message.role,
      content:
        message.role === "assistant"
          ? message.content.slice(0, MAX_ASSISTANT_HISTORY_CHARS)
          : message.content,
    }));

  let body = JSON.stringify({ messages });
  while (
    messages.length > 1 &&
    new TextEncoder().encode(body).byteLength > MAX_CHAT_REQUEST_BYTES
  ) {
    messages.shift();
    body = JSON.stringify({ messages });
  }

  return body;
};

const parseInline = (text, keyPrefix) => {
  const pattern =
    /(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|<(https?:\/\/[^>]+)>|(https?:\/\/[^\s<>]+)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(`[^`]+`))/g;
  const nodes = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const rawUrl = match[3] || match[4] || match[5];
    if (rawUrl) {
      const trailing = rawUrl.match(/[.,!?;:]+$/)?.[0] || "";
      const href = trailing ? rawUrl.slice(0, -trailing.length) : rawUrl;
      const label = match[2] || href;
      nodes.push(
        <a
          key={`${keyPrefix}-link-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-brand-light underline decoration-brand/50 underline-offset-2 hover:text-white"
        >
          {label}
        </a>,
      );
      if (trailing) nodes.push(trailing);
    } else if (match[6]) {
      nodes.push(
        <strong key={`${keyPrefix}-bold-${match.index}`} className="font-semibold text-white">
          {match[6].slice(2, -2)}
        </strong>,
      );
    } else if (match[7]) {
      nodes.push(
        <em key={`${keyPrefix}-italic-${match.index}`}>
          {match[7].slice(1, -1)}
        </em>,
      );
    } else if (match[8]) {
      nodes.push(
        <code
          key={`${keyPrefix}-code-${match.index}`}
          className="rounded bg-black/20 px-1.5 py-0.5 font-mono text-xs text-brand-light"
        >
          {match[8].slice(1, -1)}
        </code>,
      );
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
};

const isTableDivider = (line) =>
  /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);

const getTableCells = (line) =>
  line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

const FormattedMessage = ({ content }) => {
  const lines = content.split(/\r?\n/);
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (
      line.includes("|") &&
      index + 1 < lines.length &&
      isTableDivider(lines[index + 1])
    ) {
      const headers = getTableCells(line);
      index += 2;
      const rows = [];

      while (index < lines.length && lines[index].includes("|")) {
        const cells = getTableCells(lines[index]);
        if (cells.some(Boolean)) rows.push(cells);
        index += 1;
      }

      blocks.push(
        <div
          key={`table-${index}`}
          className="space-y-3"
          role="list"
          aria-label="Portfolio details"
        >
          {rows.map((cells, rowIndex) => (
            <article
              key={`row-${rowIndex}`}
              role="listitem"
              className="rounded-xl border border-white/10 bg-black/10 p-3"
            >
              {cells.map((cell, cellIndex) =>
                cell ? (
                  <p
                    key={`cell-${cellIndex}`}
                    className={cellIndex === 0 ? "text-sm font-semibold text-white" : "mt-2 text-sm leading-relaxed text-gray-200"}
                  >
                    {cellIndex > 0 && headers[cellIndex] && (
                      <span className="mr-1 font-medium text-gray-400">
                        {headers[cellIndex]}:
                      </span>
                    )}
                    {parseInline(cell, `table-${rowIndex}-${cellIndex}`)}
                  </p>
                ) : null,
              )}
            </article>
          ))}
        </div>,
      );
      continue;
    }

    const heading = line.match(/^#{1,3}\s+(.+)$/);
    if (heading) {
      blocks.push(
        <h3
          key={`heading-${index}`}
          className="text-sm font-semibold text-white"
        >
          {parseInline(heading[1], `heading-${index}`)}
        </h3>,
      );
      index += 1;
      continue;
    }

    const bullet = line.match(/^[-*•]\s+(.+)$/);
    if (bullet) {
      const items = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^[-*•]\s+(.+)$/);
        if (!item) break;
        items.push(item[1]);
        index += 1;
      }
      blocks.push(
        <ul
          key={`list-${index}`}
          className="list-disc space-y-1.5 pl-5 marker:text-brand"
        >
          {items.map((item, itemIndex) => (
            <li key={`item-${itemIndex}`} className="pl-0.5">
              {parseInline(item, `list-${index}-${itemIndex}`)}
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    const numberedItem = line.match(/^\d+[.)]\s+(.+)$/);
    if (numberedItem) {
      const items = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^\d+[.)]\s+(.+)$/);
        if (!item) break;
        items.push(item[1]);
        index += 1;
      }
      blocks.push(
        <ol key={`ordered-${index}`} className="list-decimal space-y-1.5 pl-5 marker:text-brand">
          {items.map((item, itemIndex) => (
            <li key={`item-${itemIndex}`} className="pl-0.5">
              {parseInline(item, `ordered-${index}-${itemIndex}`)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^#{1,3}\s+/.test(lines[index].trim()) &&
      !/^[-*•]\s+/.test(lines[index].trim()) &&
      !/^\d+[.)]\s+/.test(lines[index].trim()) &&
      !(lines[index].includes("|") && index + 1 < lines.length && isTableDivider(lines[index + 1]))
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push(
      <p key={`paragraph-${index}`} className="leading-relaxed">
        {parseInline(paragraph.join(" "), `paragraph-${index}`)}
      </p>,
    );
  }

  return <div className="space-y-3">{blocks}</div>;
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isLoading]);

  const sendMessage = async (event, suggestedQuestion) => {
    event?.preventDefault();
    const content = (suggestedQuestion || draft).trim();
    if (!content || isLoading) return;

    const userMessage = { role: "user", content };
    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: buildChatRequestBody(messages, userMessage),
      });

      if (response.status === 404) {
        throw new Error(
          "The AI route was not found. Restart the site with `npm run dev` so Netlify Functions are available.",
        );
      }

      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The assistant returned an unreadable response. Please try again.",
        );
      }

      if (!response.ok) {
        const requestError = new Error(
          result.error || "The assistant is unavailable right now.",
        );
        requestError.code = result.code;
        throw requestError;
      }
      if (typeof result.reply !== "string" || !result.reply.trim()) {
        throw new Error("The assistant returned an empty response. Please try again.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: result.reply },
      ]);
    } catch (requestError) {
      setMessages((current) => current.slice(0, -1));
      setDraft(content);
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {isOpen && (
          <Motion.section
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            aria-label="Ask the portfolio assistant"
            className="absolute bottom-16 right-0 flex h-[min(36rem,calc(100dvh-7rem))] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#13091e] shadow-2xl shadow-black/50"
          >
            <header className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                  <Bot size={21} />
                </span>
                <div>
                  <h2 className="font-semibold text-white">Portfolio AI</h2>
                  <p className="text-xs text-gray-400">Ask about Mohammed’s work</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close portfolio assistant"
                className="rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </header>

            <div
              className="flex-1 space-y-4 overflow-y-auto p-4"
              aria-live="polite"
              aria-relevant="additions text"
            >
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/[0.06] p-4 text-sm leading-relaxed text-gray-200">
                    Hi! I’m an AI guide to Mohammed’s portfolio. Ask me about
                    his projects, skills, or how to get in touch.
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        disabled={isLoading}
                        onClick={(event) => sendMessage(event, question)}
                        className="rounded-full border border-brand/25 px-3 py-2 text-left text-xs text-brand-light transition hover:border-brand/60 hover:bg-brand/10"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[90%] rounded-2xl p-3.5 text-sm ${
                    message.role === "user"
                      ? "ml-auto whitespace-pre-wrap rounded-tr-sm bg-brand text-white"
                      : "rounded-tl-sm bg-white/[0.06] text-gray-200"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <FormattedMessage content={message.content} />
                  ) : (
                    message.content
                  )}
                </div>
              ))}

              {isLoading && (
                <div
                  className="flex items-center gap-2 text-sm text-gray-400"
                  role="status"
                >
                  <LoaderCircle size={16} className="animate-spin text-brand" />
                  Thinking…
                </div>
              )}
              {error && (
                <p className="rounded-xl bg-red-500/10 p-3 text-xs text-red-300" role="alert">
                  {error}
                </p>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={sendMessage}
              className="border-t border-white/10 p-3"
            >
              <label className="sr-only" htmlFor="portfolio-chat-message">
                Ask a question about the portfolio
              </label>
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 focus-within:border-brand/60">
                <input
                  id="portfolio-chat-message"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  maxLength={1000}
                  placeholder="Ask me anything…"
                  className="min-w-0 flex-1 border-0 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  disabled={isLoading || !draft.trim()}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition hover:bg-brand/80 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={17} />
                </button>
              </div>
              <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-gray-500">
                <Sparkles size={11} /> AI answers can be inaccurate
              </p>
            </form>
          </Motion.section>
        )}
      </AnimatePresence>

      <Motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close portfolio assistant" : "Ask portfolio AI"}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-brand/30 transition hover:shadow-brand/50"
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
      </Motion.button>
    </div>
  );
};

export default ChatAssistant;
