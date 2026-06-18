/**
 * Strips HTML tags from a string and replaces common HTML entities with their plaintext equivalents.
 */
export const stripHtml = (html: string): string => {
  if (!html) return '';
  const clean = html.replace(/<[^>]*>/g, '');
  return clean
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};

/**
 * Formats an ISO/WordPress date string into a localized format.
 */
export const formatDate = (dateString: string, locale: string): string => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch (e) {
    return dateString;
  }
};

/**
 * Calculates the estimated reading time of HTML content in minutes.
 */
export const calculateReadTime = (htmlContent: string): number => {
  if (!htmlContent) return 1;
  const text = htmlContent.replace(/<[^>]*>/g, '');
  const wordCount = text.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};
