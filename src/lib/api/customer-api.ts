const getBaseUrl = () => process.env.NEXT_PUBLIC_API_BASE_URL;

const postJson = async <T, P>(
  path: string,
  payload: P
): Promise<{ ok: boolean; data: T | null; error?: string }> => {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    return { ok: false, data: null, error: "API base URL not configured" };
  }

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => null)) as T | null;

    if (!response.ok) {
      return {
        ok: false,
        data,
        error:
          data && typeof data === "object" && "error" in data
            ? (data as { error?: string }).error
            : "Request failed",
      };
    }

    return { ok: true, data };
  } catch (error) {
    return {
      ok: false,
      data: null,
      error: error instanceof Error ? error.message : "Request failed",
    };
  }
};

interface SubscribePayload {
  email: string;
  source?: string;
}

interface ConsultationPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  question: string;
  agreement: boolean;
}

type ApiResponse = { message?: string; error?: string };

export const submitSubscription = (payload: SubscribePayload) =>
  postJson<ApiResponse, SubscribePayload>("/api/subscribe/", payload);

export const submitConsultation = (payload: ConsultationPayload) =>
  postJson<ApiResponse, ConsultationPayload>(
    "/api/consultation/submit/",
    payload
  );
