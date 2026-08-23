import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import i18n from '~/i18n';
import { notificationService, type Notification } from '~/services/notificationService';

function formatTimeAgo(dateString: string, t: any): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return t('header.popovers.notifications.timeAgo.justNow');
  if (diffInSeconds < 3600) {
    const count = Math.floor(diffInSeconds / 60);
    return t('header.popovers.notifications.timeAgo.ago', {
      count,
      units: t('header.popovers.notifications.timeAgo.units.min'),
    });
  }
  if (diffInSeconds < 86400) {
    const count = Math.floor(diffInSeconds / 3600);
    return t('header.popovers.notifications.timeAgo.ago', {
      count,
      units: t('header.popovers.notifications.timeAgo.units.hour'),
    });
  }
  if (diffInSeconds < 172800) return t('header.popovers.notifications.timeAgo.yesterday');
  if (diffInSeconds < 604800) {
    const count = Math.floor(diffInSeconds / 86400);
    return t('header.popovers.notifications.timeAgo.ago', {
      count,
      units: t('header.popovers.notifications.timeAgo.units.day'),
    });
  }
  return date.toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', {
    day: 'numeric',
    month: 'short',
  });
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getNotificationIcon(notificationType: string) {
  const icons = {
    // Request notifications
    REQUEST_SUBMITTED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    REQUEST_ACCEPTED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    REQUEST_REJECTED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    REQUEST_COMPLETED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    REQUEST_CANCELLED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
      color: 'text-gray-600',
      bg: 'bg-gray-50',
    },
    REQUEST_DELIVERED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
      color: 'text-green-600',
      bg: 'bg-green-50',
    },

    // Review notifications
    REVIEW_RECEIVED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },

    // Travel/Demand notifications
    TRAVEL_PUBLISHED: {
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
          <path d="m277.556 43.754c5.522 0 10-4.477 10-10v-23.754c0-5.523-4.478-10-10-10s-10 4.477-10 10v23.754c0 5.523 4.478 10 10 10z" />
          <path d="m471.607 347.77c0-12.3-5.465-23.347-14.095-30.84 8.63-7.494 14.095-18.54 14.095-30.84 0-22.52-18.321-40.84-40.841-40.84h-121.45l14.019-52.917c11.576-43.666-8.84-84.466-34.394-97.227-14.991-7.49-27.029-8.683-36.802-3.649-13.346 6.874-17.557 22.883-20.12 39.15-9.737 61.487-24.304 103.025-69.471 137.227-3.16-11.847-13.978-20.601-26.807-20.601h-67.604c-15.298 0-27.745 12.446-27.745 27.745v201.199c0 15.298 12.446 27.745 27.745 27.745h67.605c12.897 0 23.765-8.846 26.86-20.788 29.958 17.067 75.998 28.866 105.203 28.866h139.49c22.52 0 40.841-18.321 40.841-40.84 0-8.211-2.437-15.866-6.624-22.276 17.323-4.732 30.095-20.619 30.095-39.433 0-12.3-5.465-23.347-14.095-30.84 8.63-7.494 14.095-18.541 14.095-30.841zm-328.12 128.407c0 4.198-3.546 7.745-7.744 7.745h-67.606c-4.198 0-7.745-3.546-7.745-7.745v-201.199c0-4.198 3.546-7.745 7.745-7.745h67.605c4.198 0 7.744 3.546 7.744 7.745v201.199zm245.242-149.247h42.037c11.491 0 20.841 9.349 20.841 20.84s-9.35 20.84-20.841 20.84h-42.037c-5.522 0-10 4.477-10 10s4.478 10 10 10h42.037c11.491 0 20.841 9.349 20.841 20.84 0 11.507-9.35 20.869-20.841 20.869h-23.471-18.566c-5.522 0-10 4.477-10 10s4.478 10 10 10h18.566c11.491 0 20.841 9.349 20.841 20.84s-9.349 20.841-20.84 20.841h-139.49c-28.759 0-79.805-14.05-104.319-32.008v-168.303c27.676-18.48 47.117-39.243 60.902-65.007 12.611-23.571 20.802-51.369 27.387-92.954.918-5.83 3.357-21.314 9.522-24.49 3.548-1.829 10.192-.493 18.707 3.762 16.169 8.074 33.504 38.354 23.997 74.21l-17.348 65.479c-1.652 6.237 3.216 12.561 9.667 12.561h134.444c11.491 0 20.841 9.349 20.841 20.84s-9.35 20.84-20.841 20.84h-42.037c-5.522 0-10 4.477-10 10s4.479 10 10.001 10z" />
          <path d="m104.278 302.706c-5.523 0-10 4.505-10 10.028s4.477 10 10 10 10-4.477 10-10v-.057c0-5.522-4.477-9.971-10-9.971z" />
          <path d="m162.555 49.314 17.773 15.76c1.904 1.688 4.272 2.518 6.631 2.518 2.761 0 5.51-1.137 7.486-3.365 3.665-4.132 3.285-10.453-.847-14.117l-17.773-15.76c-4.132-3.665-10.452-3.285-14.117.847-3.664 4.133-3.285 10.453.847 14.117z" />
          <path d="m368.154 67.593c2.358 0 4.727-.83 6.631-2.518l17.773-15.76c4.132-3.664 4.512-9.984.848-14.117-3.664-4.132-9.982-4.512-14.117-.847l-17.773 15.76c-4.132 3.664-4.512 9.984-.848 14.117 1.976 2.228 4.724 3.365 7.486 3.365z" />
          <path d="m130.392 138.335 23.754.992c.142.006.284.009.425.009 5.331 0 9.759-4.207 9.984-9.583.23-5.518-4.056-10.178-9.574-10.409l-23.754-.992c-5.517-.227-10.179 4.055-10.409 9.574s4.056 10.179 9.574 10.409z" />
          <path d="m390.558 129.754c.225 5.376 4.653 9.583 9.984 9.583.141 0 .282-.003.424-.009l23.754-.992c5.519-.23 9.805-4.891 9.574-10.409s-4.901-9.795-10.408-9.574l-23.754.992c-5.518.231-9.804 4.891-9.574 10.409z" />
        </svg>
      ),
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    DEMAND_PUBLISHED: {
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
          <path d="m277.556 43.754c5.522 0 10-4.477 10-10v-23.754c0-5.523-4.478-10-10-10s-10 4.477-10 10v23.754c0 5.523 4.478 10 10 10z" />
          <path d="m471.607 347.77c0-12.3-5.465-23.347-14.095-30.84 8.63-7.494 14.095-18.54 14.095-30.84 0-22.52-18.321-40.84-40.841-40.84h-121.45l14.019-52.917c11.576-43.666-8.84-84.466-34.394-97.227-14.991-7.49-27.029-8.683-36.802-3.649-13.346 6.874-17.557 22.883-20.12 39.15-9.737 61.487-24.304 103.025-69.471 137.227-3.16-11.847-13.978-20.601-26.807-20.601h-67.604c-15.298 0-27.745 12.446-27.745 27.745v201.199c0 15.298 12.446 27.745 27.745 27.745h67.605c12.897 0 23.765-8.846 26.86-20.788 29.958 17.067 75.998 28.866 105.203 28.866h139.49c22.52 0 40.841-18.321 40.841-40.84 0-8.211-2.437-15.866-6.624-22.276 17.323-4.732 30.095-20.619 30.095-39.433 0-12.3-5.465-23.347-14.095-30.84 8.63-7.494 14.095-18.541 14.095-30.841zm-328.12 128.407c0 4.198-3.546 7.745-7.744 7.745h-67.606c-4.198 0-7.745-3.546-7.745-7.745v-201.199c0-4.198 3.546-7.745 7.745-7.745h67.605c4.198 0 7.744 3.546 7.744 7.745v201.199zm245.242-149.247h42.037c11.491 0 20.841 9.349 20.841 20.84s-9.35 20.84-20.841 20.84h-42.037c-5.522 0-10 4.477-10 10s4.478 10 10 10h42.037c11.491 0 20.841 9.349 20.841 20.84 0 11.507-9.35 20.869-20.841 20.869h-23.471-18.566c-5.522 0-10 4.477-10 10s4.478 10 10 10h18.566c11.491 0 20.841 9.349 20.841 20.84s-9.349 20.841-20.84 20.841h-139.49c-28.759 0-79.805-14.05-104.319-32.008v-168.303c27.676-18.48 47.117-39.243 60.902-65.007 12.611-23.571 20.802-51.369 27.387-92.954.918-5.83 3.357-21.314 9.522-24.49 3.548-1.829 10.192-.493 18.707 3.762 16.169 8.074 33.504 38.354 23.997 74.21l-17.348 65.479c-1.652 6.237 3.216 12.561 9.667 12.561h134.444c11.491 0 20.841 9.349 20.841 20.84s-9.35 20.84-20.841 20.84h-42.037c-5.522 0-10 4.477-10 10s4.479 10 10.001 10z" />
          <path d="m104.278 302.706c-5.523 0-10 4.505-10 10.028s4.477 10 10 10 10-4.477 10-10v-.057c0-5.522-4.477-9.971-10-9.971z" />
          <path d="m162.555 49.314 17.773 15.76c1.904 1.688 4.272 2.518 6.631 2.518 2.761 0 5.51-1.137 7.486-3.365 3.665-4.132 3.285-10.453-.847-14.117l-17.773-15.76c-4.132-3.665-10.452-3.285-14.117.847-3.664 4.133-3.285 10.453.847 14.117z" />
          <path d="m368.154 67.593c2.358 0 4.727-.83 6.631-2.518l17.773-15.76c4.132-3.664 4.512-9.984.848-14.117-3.664-4.132-9.982-4.512-14.117-.847l-17.773 15.76c-4.132 3.664-4.512 9.984-.848 14.117 1.976 2.228 4.724 3.365 7.486 3.365z" />
          <path d="m130.392 138.335 23.754.992c.142.006.284.009.425.009 5.331 0 9.759-4.207 9.984-9.583.23-5.518-4.056-10.178-9.574-10.409l-23.754-.992c-5.517-.227-10.179 4.055-10.409 9.574s4.056 10.179 9.574 10.409z" />
          <path d="m390.558 129.754c.225 5.376 4.653 9.583 9.984 9.583.141 0 .282-.003.424-.009l23.754-.992c5.519-.23 9.805-4.891 9.574-10.409s-4.901-9.795-10.408-9.574l-23.754.992c-5.518.231-9.804 4.891-9.574 10.409z" />
        </svg>
      ),
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    TRAVEL_MATCHED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    DEMAND_MATCHED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },

    // Payment notifications
    PAYMENT_RECEIVED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    PAYMENT_COMPLETED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    TRANSACTION_CREATED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },

    // Account notifications
    ACCOUNT_VERIFIED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    ACCOUNT_VERIFICATION_FAILED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    VERIFICATION_DOCUMENTS_RECEIVED: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },

    // System notifications
    SYSTEM_ANNOUNCEMENT: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },

    // Default
    DEFAULT: {
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  };

  return icons[notificationType as keyof typeof icons] || icons.DEFAULT;
}

function getNotificationLink(notification: Notification): string | null {
  const { notificationType, data } = notification;

  if (!data?.entityId) return null;

  const entityId = data.entityId;
  const entityType = data.entityType;

  // Demandes - Rediriger vers la page d'annonce avec type=demand
  if (notificationType?.includes('DEMAND') || entityType === 'DEMAND') {
    return `/announces?id=${entityId}&type=demand`;
  }

  // Annonces/Voyages - Rediriger vers la page d'annonce avec type=travel
  if (
    notificationType?.includes('ANNOUNCE') ||
    notificationType?.includes('TRAVEL') ||
    entityType === 'ANNOUNCE' ||
    entityType === 'TRAVEL'
  ) {
    return `/announces?id=${entityId}&type=travel`;
  }

  // Réservations - Rediriger vers le tab réservations du profil
  if (
    notificationType?.includes('BOOKING') ||
    notificationType?.includes('REQUEST') ||
    entityType === 'BOOKING' ||
    entityType === 'REQUEST'
  ) {
    return `/profile?section=reservations`;
  }

  // Messages - Rediriger vers le tab messages du profil
  if (notificationType?.includes('MESSAGE') || entityType === 'MESSAGE') {
    return `/profile?section=messages`;
  }

  // Avis - Rediriger vers le tab avis du profil
  if (notificationType?.includes('REVIEW') || entityType === 'REVIEW') {
    return `/profile?section=reviews`;
  }

  // Paiements - Rediriger vers le tab paiements du profil
  if (notificationType?.includes('PAYMENT') || entityType === 'PAYMENT') {
    return `/profile?section=payments`;
  }

  return null;
}

export default function NotificationPopover({
  open,
  onClose,
  onCountChange,
}: {
  open: boolean;
  onClose: () => void;
  onCountChange?: (count: number) => void;
}) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const hiddenNotificationIdsRef = useRef<Set<number>>(new Set());

  const loadNotifications = useCallback(async (silent: boolean = false) => {
    try {
      if (!silent) setLoading(true);
      const [response, counts] = await Promise.all([
        notificationService.getNotifications({ limit: 10, unreadOnly: true }),
        notificationService.getNotificationCounts().catch(() => null),
      ]);
      const visibleItems = response.items.filter(
        (notification) => !hiddenNotificationIdsRef.current.has(notification.id)
      );
      setNotifications(visibleItems);
      if (counts) onCountChange?.(counts.unreadCount ?? counts.unread ?? 0);
    } catch (error) {
      console.error('Failed to load notifications:', error);
    } finally {
      if (!silent) setLoading(false);
    }
  }, [onCountChange]);

  useEffect(() => {
    if (open) {
      loadNotifications();
    }
  }, [open, loadNotifications]);

  useEffect(() => {
    if (!open) return;

    const refreshSilently = () => {
      if (document.hidden) return;
      void loadNotifications(true);
    };

    const interval = window.setInterval(refreshSilently, 5000);
    window.addEventListener('focus', refreshSilently);
    document.addEventListener('visibilitychange', refreshSilently);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener('focus', refreshSilently);
      document.removeEventListener('visibilitychange', refreshSilently);
    };
  }, [open, loadNotifications]);

  const handleMarkAsRead = async (id: number) => {
    const previousNotifications = notifications;
    hiddenNotificationIdsRef.current.add(id);
    setNotifications((prev) => {
      const target = prev.find((n) => n.id === id);
      if (target && !target.isRead) {
        onCountChange?.(Math.max(0, prev.filter((n) => !n.isRead).length - 1));
      }
      return prev.filter((n) => n.id !== id);
    });
    try {
      await notificationService.markAsRead(id);
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
      hiddenNotificationIdsRef.current.delete(id);
      setNotifications(previousNotifications);
      onCountChange?.(previousNotifications.filter((n) => !n.isRead).length);
    }
  };

  const handleNotificationClick = async (notification: Notification) => {
    // Mark as read if not already
    if (!notification.isRead) {
      await handleMarkAsRead(notification.id);
    }

    // Get the link and navigate
    const link = getNotificationLink(notification);
    if (link) {
      onClose();
      navigate(link);
    }
  };

  const handleMarkAllAsRead = async () => {
    const previousNotifications = notifications;
    const previousHiddenNotificationIds = new Set(hiddenNotificationIdsRef.current);
    notifications.forEach((notification) => hiddenNotificationIdsRef.current.add(notification.id));
    setNotifications([]);
    onCountChange?.(0);
    try {
      await notificationService.markAllAsRead();
    } catch (error) {
      console.error('Failed to mark all as read:', error);
      hiddenNotificationIdsRef.current = previousHiddenNotificationIds;
      setNotifications(previousNotifications);
      onCountChange?.(previousNotifications.filter((n) => !n.isRead).length);
    }
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    // Delay adding the click listener to avoid immediate closure
    const timeoutId = setTimeout(() => {
      window.addEventListener('mousedown', onClickOutside);
    }, 0);

    window.addEventListener('keydown', onKey);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-full mt-3 w-75 md:w-96 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-900/5 backdrop-blur-xl"
      role="dialog"
      aria-label={t('header.popovers.notifications.title')}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {t('header.popovers.notifications.title')}
            </h3>
            {notifications.length > 0 && (
              <p className="text-xs text-gray-500">
                {t('header.popovers.notifications.unread', {
                  count: notifications.filter((n) => !n.isRead).length,
                })}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
          aria-label={t('header.popovers.notifications.closeLabel')}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12M6 18L18 6"
            />
          </svg>
        </button>
      </div>

      {/* Mark all as read button */}
      {notifications && notifications.some((n) => !n.isRead) && (
        <div className="px-6 py-2 border-b border-gray-100">
          <button
            onClick={handleMarkAllAsRead}
            className="text-xs text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            {t('header.popovers.notifications.markAllAsRead')}
          </button>
        </div>
      )}

      {/* Notifications List */}
      <ul className="max-h-96 overflow-y-auto divide-y divide-gray-50">
        {loading ? (
          <li className="px-6 py-12 text-center">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-sm text-gray-500">
              {t('header.popovers.notifications.loading')}
            </p>
          </li>
        ) : notifications.length === 0 ? (
          <li className="px-6 py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {t('header.popovers.notifications.empty')}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {t('header.popovers.notifications.upToDate')}
            </p>
          </li>
        ) : (
          notifications.map((n) => {
            const iconData = getNotificationIcon(n.notificationType || 'DEFAULT');
            const hasLink = getNotificationLink(n) !== null;

            return (
              <li key={n.id}>
                <button
                  onClick={() => handleNotificationClick(n)}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 ${
                    !n.isRead ? 'bg-blue-50/30 hover:bg-blue-50/50' : 'hover:bg-gray-50'
                  } ${hasLink ? 'cursor-pointer' : 'cursor-default'} group`}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div
                      className={`shrink-0 w-9 h-9 rounded-xl ${iconData.bg} ${iconData.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      {iconData.svg}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-0.5">
                        <h4
                          className={`text-xs font-semibold ${!n.isRead ? 'text-gray-900' : 'text-gray-700'} line-clamp-1`}
                        >
                          {n.title}
                        </h4>
                        {!n.isRead && (
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-1"></span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2 mb-1.5">{n.message}</p>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{formatTimeAgo(n.createdAt, t)}</span>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })
        )}
      </ul>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="border-t border-gray-100 p-3">
          <Link
            to="/notifications"
            onClick={onClose}
            className="block rounded-xl px-4 py-3 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
          >
            {t('header.popovers.notifications.viewAll')}
          </Link>
        </div>
      )}
    </div>
  );
}
