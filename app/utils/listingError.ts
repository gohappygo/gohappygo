import type { TFunction } from 'i18next';

export function listingError(message: unknown, t: TFunction, fallback: string): string {
  if (Array.isArray(message) && message.length) {
    return message.map((item) => listingError(item, t, fallback)).join(' · ');
  }
  if (typeof message !== 'string' || !message.trim()) return t(fallback);
  if (/^(?:departure date(?:time)?|travel date) (?:must be in the future|cannot be in the past)/i.test(message)) {
    return t('dialogs.createAnnounce.errors.travelDatePast');
  }
  if (/^you have already published an active (?:travel|demand) (?:with the same flight number|on the same route)/i.test(message)) {
    return t('dialogs.createAnnounce.errors.duplicateListing');
  }
  return message;
}
