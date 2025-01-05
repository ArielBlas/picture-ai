import { create } from "zustand";
import { z } from "zod";
import { ImageGenerationformSchema } from "@/components/image-generation/Configurations";
import { generateImageAction, storeImages } from "../actions/image-actions";

interface GenerateState {
  loading: boolean;
  images: Array<{ url: string }>;
  error: string | null;
  generateImage: (
    values: z.infer<typeof ImageGenerationformSchema>
  ) => Promise<void>;
}

const useGeneratedStore = create<GenerateState>((set) => ({
  loading: false,
  images: [],
  error: null,

  generateImage: async (values: z.infer<typeof ImageGenerationformSchema>) => {
    set({ loading: true, error: null });

    try {
      const { error, success, data } = await generateImageAction(values);
      if (!success) {
        set({ error: error, loading: false });
        return;
      }

      const dataWithUrl = data.map((url: string) => ({
        url,
        ...values,
      }));

      set({ images: dataWithUrl, loading: false });

      await storeImages(dataWithUrl);
    } catch {
      set({
        error: "Failed to generate image. Please try again.",
        loading: false,
      });
    }
  },
}));

export default useGeneratedStore;
