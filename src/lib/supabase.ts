import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/database.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type Tables = Database["public"]["Tables"];
export type Users = Tables["users"]["Row"];
export type SignalAccounts = Tables["signal_accounts"]["Row"];
export type TradeAccounts = Tables["trade_accounts"]["Row"];
export type Subscriptions = Tables["subscriptions"]["Row"];
export type SubscriptionTradeAccounts =
  Tables["subscription_trade_accounts"]["Row"];
export type Trades = Tables["trades"]["Row"];
export type CopiedTrades = Tables["copied_trades"]["Row"];
export type Comments = Tables["comments"]["Row"];
export type PerformanceStats = Tables["performance_stats"]["Row"];
