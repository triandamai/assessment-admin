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
      about: {
        Row: {
          about: string | null
          about_header: string | null
          about_thumbnail: string | null
          created_at: string
          founder_bio: string | null
          founder_name: string | null
          founder_picture: string | null
          id: number
        }
        Insert: {
          about?: string | null
          about_header?: string | null
          about_thumbnail?: string | null
          created_at?: string
          founder_bio?: string | null
          founder_name?: string | null
          founder_picture?: string | null
          id?: number
        }
        Update: {
          about?: string | null
          about_header?: string | null
          about_thumbnail?: string | null
          created_at?: string
          founder_bio?: string | null
          founder_name?: string | null
          founder_picture?: string | null
          id?: number
        }
        Relationships: []
      }
      blog: {
        Row: {
          content: string | null
          created_at: string
          id: number
          thumbnail: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          thumbnail?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          thumbnail?: string | null
          title?: string | null
        }
        Relationships: []
      }
      contact_information: {
        Row: {
          created_at: string
          id: number
          key: string | null
          name: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          key?: string | null
          name?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          key?: string | null
          name?: string | null
          value?: string | null
        }
        Relationships: []
      }
      gallery: {
        Row: {
          created_at: string
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: []
      }
      product: {
        Row: {
          content: string | null
          created_at: string
          id: number
          product_name: string | null
          thumbnail: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          product_name?: string | null
          thumbnail?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          product_name?: string | null
          thumbnail?: string | null
        }
        Relationships: []
      }
      product_price: {
        Row: {
          created_at: string
          duration: string | null
          exclude: string | null
          id: number
          include: string | null
          name: string | null
          price: number | null
          product_id: number | null
          product_price_category_id: number | null
          result: string | null
        }
        Insert: {
          created_at?: string
          duration?: string | null
          exclude?: string | null
          id?: number
          include?: string | null
          name?: string | null
          price?: number | null
          product_id?: number | null
          product_price_category_id?: number | null
          result?: string | null
        }
        Update: {
          created_at?: string
          duration?: string | null
          exclude?: string | null
          id?: number
          include?: string | null
          name?: string | null
          price?: number | null
          product_id?: number | null
          product_price_category_id?: number | null
          result?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_price_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_price"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_price_product_price_category_id_fkey"
            columns: ["product_price_category_id"]
            isOneToOne: false
            referencedRelation: "product_price_category"
            referencedColumns: ["id"]
          },
        ]
      }
      product_price_category: {
        Row: {
          category_group: string | null
          created_at: string
          id: number
          name: string | null
          value: string | null
        }
        Insert: {
          category_group?: string | null
          created_at?: string
          id?: number
          name?: string | null
          value?: string | null
        }
        Update: {
          category_group?: string | null
          created_at?: string
          id?: number
          name?: string | null
          value?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
