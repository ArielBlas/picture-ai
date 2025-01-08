export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      credits: {
        Row: {
          created_at: string
          id: number
          image_generation_count: number | null
          max_image_generation_count: number | null
          max_model_training_count: number | null
          model_training_count: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: never
          image_generation_count?: number | null
          max_image_generation_count?: number | null
          max_model_training_count?: number | null
          model_training_count?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: never
          image_generation_count?: number | null
          max_image_generation_count?: number | null
          max_model_training_count?: number | null
          model_training_count?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      generated_images: {
        Row: {
          aspect_ratio: string | null
          created_at: string
          guidance: number | null
          height: number | null
          id: number
          image_name: string | null
          model: string | null
          num_inference_steps: number | null
          output_format: string | null
          prompt: string | null
          user_id: string | null
          width: number | null
        }
        Insert: {
          aspect_ratio?: string | null
          created_at?: string
          guidance?: number | null
          height?: number | null
          id?: never
          image_name?: string | null
          model?: string | null
          num_inference_steps?: number | null
          output_format?: string | null
          prompt?: string | null
          user_id?: string | null
          width?: number | null
        }
        Update: {
          aspect_ratio?: string | null
          created_at?: string
          guidance?: number | null
          height?: number | null
          id?: never
          image_name?: string | null
          model?: string | null
          num_inference_steps?: number | null
          output_format?: string | null
          prompt?: string | null
          user_id?: string | null
          width?: number | null
        }
        Relationships: []
      }
      models: {
        Row: {
          created_at: string
          gender: Database["public"]["Enums"]["gender"] | null
          id: number
          model_id: string | null
          model_name: string | null
          training_id: string | null
          training_status: Database["public"]["Enums"]["training_status"] | null
          training_steps: number | null
          training_time: string | null
          trigger_word: string | null
          user_id: string | null
          version: string | null
        }
        Insert: {
          created_at?: string
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: never
          model_id?: string | null
          model_name?: string | null
          training_id?: string | null
          training_status?:
            | Database["public"]["Enums"]["training_status"]
            | null
          training_steps?: number | null
          training_time?: string | null
          trigger_word?: string | null
          user_id?: string | null
          version?: string | null
        }
        Update: {
          created_at?: string
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: never
          model_id?: string | null
          model_name?: string | null
          training_id?: string | null
          training_status?:
            | Database["public"]["Enums"]["training_status"]
            | null
          training_steps?: number | null
          training_time?: string | null
          trigger_word?: string | null
          user_id?: string | null
          version?: string | null
        }
        Relationships: []
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          billing_address: Json | null
          full_name: string | null
          id: string
          payment_method: Json | null
        }
        Insert: {
          billing_address?: Json | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
        }
        Update: {
          billing_address?: Json | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      orioledb_index: {
        Row: {
          datoid: unknown | null
          description: string | null
          index_relnode: unknown | null
          index_reloid: unknown | null
          index_type: string | null
          name: string | null
          table_relnode: unknown | null
          table_reloid: unknown | null
        }
        Relationships: []
      }
      orioledb_index_descr: {
        Row: {
          datoid: unknown | null
          refcnt: unknown | null
          relnode: unknown | null
          reloid: unknown | null
        }
        Relationships: []
      }
      orioledb_table: {
        Row: {
          datoid: unknown | null
          description: string | null
          relnode: unknown | null
          reloid: unknown | null
        }
        Relationships: []
      }
      orioledb_table_descr: {
        Row: {
          datoid: unknown | null
          refcnt: unknown | null
          relnode: unknown | null
          reloid: unknown | null
        }
        Relationships: []
      }
    }
    Functions: {
      orioledb_commit_hash: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      orioledb_compression_max_level: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      orioledb_evict_pages: {
        Args: {
          relid: unknown
          maxlevel: number
        }
        Returns: undefined
      }
      orioledb_get_evicted_trees: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_get_index_descrs: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_get_table_descrs: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_has_retained_undo: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      orioledb_idx_structure: {
        Args: {
          relid: unknown
          tree_name: string
          options?: string
          depth?: number
        }
        Returns: string
      }
      orioledb_index_description: {
        Args: {
          datoid: unknown
          relid: unknown
          relnode: unknown
          index_type: string
        }
        Returns: Record<string, unknown>
      }
      orioledb_index_oids: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_index_rows: {
        Args: {
          relid: unknown
        }
        Returns: Record<string, unknown>
      }
      orioledb_page_stats: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_parallel_debug_start: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      orioledb_parallel_debug_stop: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      orioledb_recovery_synchronized: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      orioledb_relation_size: {
        Args: {
          relid: unknown
        }
        Returns: number
      }
      orioledb_sys_tree_check: {
        Args: {
          num: number
          force_map_check?: boolean
        }
        Returns: boolean
      }
      orioledb_sys_tree_rows: {
        Args: {
          num: number
        }
        Returns: Json[]
      }
      orioledb_sys_tree_structure: {
        Args: {
          num: number
          options?: string
          depth?: number
        }
        Returns: string
      }
      orioledb_table_description:
        | {
            Args: {
              datoid: unknown
              relid: unknown
              relnode: unknown
            }
            Returns: string
          }
        | {
            Args: {
              relid: unknown
            }
            Returns: string
          }
      orioledb_table_oids: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_table_pages: {
        Args: {
          relid: unknown
        }
        Returns: Record<string, unknown>[]
      }
      orioledb_tableam_handler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      orioledb_tbl_are_indices_equal: {
        Args: {
          idx_oid1: unknown
          idx_oid2: unknown
        }
        Returns: boolean
      }
      orioledb_tbl_bin_structure: {
        Args: {
          relid: unknown
          print_bytes?: boolean
          depth?: number
        }
        Returns: string
      }
      orioledb_tbl_check: {
        Args: {
          relid: unknown
          force_map_check?: boolean
        }
        Returns: boolean
      }
      orioledb_tbl_compression_check: {
        Args: {
          level: number
          relid: unknown
          ranges?: number[]
        }
        Returns: string
      }
      orioledb_tbl_indices: {
        Args: {
          relid: unknown
        }
        Returns: string
      }
      orioledb_tbl_structure: {
        Args: {
          relid: unknown
          options?: string
          depth?: number
        }
        Returns: string
      }
      orioledb_ucm_check: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      orioledb_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      orioledb_write_pages: {
        Args: {
          relid: unknown
        }
        Returns: undefined
      }
      pg_stopevent_reset: {
        Args: {
          eventname: string
        }
        Returns: boolean
      }
      pg_stopevent_set: {
        Args: {
          eventname: string
          condition: unknown
        }
        Returns: undefined
      }
      pg_stopevents: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      s3_get: {
        Args: {
          objectname: string
        }
        Returns: string
      }
      s3_put: {
        Args: {
          objectname: string
          filename: string
        }
        Returns: string
      }
    }
    Enums: {
      gender: "man" | "women"
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
      training_status:
        | "starting"
        | "processing"
        | "succeeded"
        | "failed"
        | "canceled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
