import { create } from "zustand";
import { z } from "zod";
import { ImageGenerationformSchema } from "@/components/image-generation/Configurations";
import { generateImageAction, storeImages } from "../actions/image-actions";
import { toast } from "sonner";

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

    const toastId = toast.loading("Generating image...");

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
      toast.success("Image generated successfully!", { id: toastId });

      await storeImages(dataWithUrl);

      toast.success("Image store successfully!", { id: toastId });
    } catch {
      set({
        error: "Failed to generate image. Please try again.",
        loading: false,
      });
    }
  },
}));

export default useGeneratedStore;
