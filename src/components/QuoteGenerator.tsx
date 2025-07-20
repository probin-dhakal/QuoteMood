import React, { useState } from "react";
import { Sparkles, Loader2, Copy as CopyIcon, Check as CheckIcon } from "lucide-react";

const QuoteGenerator = () => {
  const [mood, setMood] = useState("");
  const [generatedQuote, setGeneratedQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false); 

  const moods = [
    "happy", "sad", "motivated", "romantic", "funny", "confident",
    "peaceful", "energetic", "thoughtful", "grateful", "adventurous", "creative",
  ];

  const generateQuote = async () => {
    if (!mood.trim()) return;
   const apiKey = import.meta.env.VITE_GEMINI_API_KEY;



    setIsLoading(true);
    setError("");
    setGeneratedQuote("");
    setCopied(false);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Generate a short, aesthetic, original Instagram caption style quote for someone feeling "${mood}". Keep it under 25 words and impactful.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        console.error("API Error Details:", errData);
        throw new Error("API request failed");
      }

      const data = await response.json();
      const quote =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No quote generated.";

      setGeneratedQuote(quote);
    } catch (err) {
      console.error("Error generating quote:", err);
      setError("Failed to generate quote. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Copy to clipboard handler
  const handleCopy = async () => {
    if (!generatedQuote) return;
    try {
      await navigator.clipboard.writeText(generatedQuote);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200); // Reset after 1.2s
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-2xl">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Generate Quotes by Mood
        </h2>
        <p className="text-gray-600 text-lg">
          Tell us your mood and let AI create the perfect quote for you
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="mood"
            className="block text-sm font-semibold text-gray-700 mb-3"
          >
            How are you feeling today?
          </label>
          <div className="flex flex-wrap gap-2 mb-4">
            {moods.map((moodOption) => (
              <button
                key={moodOption}
                onClick={() => setMood(moodOption)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  mood === moodOption
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {moodOption}
              </button>
            ))}
          </div>
          <input
            type="text"
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Or type your own mood..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>

        <button
          onClick={generateQuote}
          disabled={!mood.trim() || isLoading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-xl hover:scale-105 transform transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-2" />
              Generate Quote
            </>
          )}
        </button>

        {generatedQuote && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 animate-fade-in">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Your Generated Quote:
                </h3>
                <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                  "{generatedQuote}"
                </blockquote>
              </div>
              <button
                onClick={handleCopy}
                className="ml-2 bg-purple-100 hover:bg-purple-200 text-purple-600 px-3 py-2 rounded-xl transition flex items-center"
                aria-label="Copy quote"
                title="Copy quote"
              >
                {copied ? (
                  <>
                    <CheckIcon size={18} className="mr-1" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon size={18} className="mr-1" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteGenerator;
