import api from "./Api";

export interface Currency {
  id: string;
  code: string;
  name: string;
  symbol: string;
  country: string;
  exchangeRate?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  createdBy?: string;
  updatedBy?: string;
  isDeleted?: boolean;
}

export interface CurrencySearchParams {
  name?: string;
  cursor?: string;
  limit?: number;
}

export interface CurrencyApiResponse {
  items: Currency[];
  meta: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export interface CurrencySearchResult {
  items: Currency[];
  nextCursor?: string;
}

export async function searchCurrencies(
  params: CurrencySearchParams
): Promise<CurrencySearchResult> {
  const { name = "", cursor, limit = 10 } = params;

  try {
    const response = await api.get<CurrencyApiResponse>("/currency", {
      params: {
        page: cursor || "1",
        limit,
        orderBy: "code:asc",
        search: name.trim() || undefined,
      },
    });
    const data = response.data;

    // Convert API response to our expected format
    const nextCursor = data.meta.hasNextPage
      ? (data.meta.currentPage + 1).toString()
      : undefined;

    return {
      items: data.items,
      nextCursor,
    };
  } catch (error) {
    console.error("Error fetching currencies:", error);

    // Fallback to some basic currencies if API fails
    const fallbackCurrencies: Currency[] = [
      {
        id: "1",
        code: "USD",
        name: "US Dollar",
        symbol: "$",
        country: "United States of America",
      },
      {
        id: "2",
        code: "EUR",
        name: "Euro",
        symbol: "€",
        country: "European Union",
      },
      {
        id: "3",
        code: "GBP",
        name: "British Pound",
        symbol: "£",
        country: "United Kingdom",
      },
      {
        id: "4",
        code: "JPY",
        name: "Japanese Yen",
        symbol: "¥",
        country: "Japan",
      },
      {
        id: "5",
        code: "CAD",
        name: "Canadian Dollar",
        symbol: "C$",
        country: "Canada",
      },
    ];

    // Apply basic filtering for fallback
    let filtered = fallbackCurrencies;
    if (name.trim()) {
      const query = name.toLowerCase();
      filtered = fallbackCurrencies.filter(
        (currency) =>
          currency.name.toLowerCase().includes(query) ||
          currency.code.toLowerCase().includes(query) ||
          currency.country.toLowerCase().includes(query)
      );
    }

    return {
      items: filtered,
      nextCursor: undefined,
    };
  }
}

export async function getCurrencyByCode(
  code: string
): Promise<Currency | null> {
  try {
    const response = await api.get<CurrencyApiResponse>("/currency", { params: { code, limit: 1 } });
    const data = response.data;
    return data.items.length > 0 ? data.items[0] : null;
  } catch (error) {
    console.error("Error fetching currency by code:", error);
    return null;
  }
}

export async function getAllCurrencies(): Promise<Currency[]> {
  try {
    const response = await api.get<CurrencyApiResponse>("/currency", { params: { limit: 100, orderBy: "code:asc" } });
    const data = response.data;
    return data.items;
  } catch (error) {
    console.error("Error fetching all currencies:", error);

    // Fallback to basic currencies if API fails
    return [
      {
        id: "1",
        code: "USD",
        name: "US Dollar",
        symbol: "$",
        country: "United States of America",
      },
      {
        id: "2",
        code: "EUR",
        name: "Euro",
        symbol: "€",
        country: "European Union",
      },
      {
        id: "3",
        code: "GBP",
        name: "British Pound",
        symbol: "£",
        country: "United Kingdom",
      },
      {
        id: "4",
        code: "JPY",
        name: "Japanese Yen",
        symbol: "¥",
        country: "Japan",
      },
      {
        id: "5",
        code: "CAD",
        name: "Canadian Dollar",
        symbol: "C$",
        country: "Canada",
      },
      {
        id: "6",
        code: "AUD",
        name: "Australian Dollar",
        symbol: "A$",
        country: "Australia",
      },
      {
        id: "7",
        code: "CHF",
        name: "Swiss Franc",
        symbol: "CHF",
        country: "Switzerland",
      },
      {
        id: "8",
        code: "CNY",
        name: "Chinese Yuan",
        symbol: "¥",
        country: "China",
      },
    ];
  }
}
