import { FetchResponse } from 'types/FetchResponse';

export const api = {
  fetch: async (input: RequestInfo, init?: RequestInit): FetchResponse => {
    try {
      const res = await fetch(input, init);

      return {
        ok: res.ok,
        res
      };
    } catch (e) {
      return { ok: false };
    }
  }
};
