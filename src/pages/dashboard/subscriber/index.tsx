import React from "react";
import { Helmet } from "react-helmet";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TradeAccountsSection from "@/components/subscriber/TradeAccountsSection";
import SubscriptionsSection from "@/components/subscriber/SubscriptionsSection";
import CopiedTradesSection from "@/components/subscriber/CopiedTradesSection";

interface SubscriberDashboardProps {
  username?: string;
  avatarUrl?: string;
  notificationCount?: number;
  tradeAccounts?: {
    id: string;
    brokerName: string;
    accountId: string;
    apiKey: string;
    nickname?: string;
    dateAdded: string;
  }[];
  subscriptions?: {
    id: string;
    providerName: string;
    signalAccountName: string;
    trialStatus: "active" | "expired" | "none";
    subscriptionStatus: "active" | "inactive";
    trialEndDate?: string;
    tradeAccountName: string;
    lotSize: number;
    reverseMode: boolean;
    onlySlTpTrades: boolean;
  }[];
}

const SubscriberDashboard = ({
  username = "TraderJoe",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=TraderJoe",
  notificationCount = 3,
  tradeAccounts = [
    {
      id: "1",
      brokerName: "IC Markets",
      accountId: "12345",
      apiKey: "api_key_1",
      dateAdded: "2023-10-15",
    },
    {
      id: "2",
      brokerName: "Pepperstone",
      accountId: "67890",
      apiKey: "api_key_2",
      nickname: "Main Trading",
      dateAdded: "2023-11-20",
    },
  ],
  subscriptions = [
    {
      id: "sub1",
      providerName: "TraderJoe",
      signalAccountName: "Aggressive Scalper",
      trialStatus: "active" as const,
      subscriptionStatus: "active" as const,
      trialEndDate: "2025-04-02",
      tradeAccountName: "IC Markets",
      lotSize: 0.5,
      reverseMode: false,
      onlySlTpTrades: true,
    },
    {
      id: "sub2",
      providerName: "ForexMaster",
      signalAccountName: "Steady Growth",
      trialStatus: "expired" as const,
      subscriptionStatus: "active" as const,
      tradeAccountName: "IC Markets",
      lotSize: 1,
      reverseMode: false,
      onlySlTpTrades: false,
    },
    {
      id: "sub3",
      providerName: "SwingTrader",
      signalAccountName: "Trend Follower",
      trialStatus: "active" as const,
      subscriptionStatus: "active" as const,
      trialEndDate: "2025-04-10",
      tradeAccountName: "Pepperstone",
      lotSize: 2,
      reverseMode: true,
      onlySlTpTrades: true,
    },
  ],
}: SubscriberDashboardProps) => {
  // Handlers for trade accounts
  const handleAddAccount = (account: any) => {
    console.log("Adding account:", account);
    // In a real implementation, this would call an API to add the account
  };

  const handleEditAccount = (id: string, account: any) => {
    console.log("Editing account:", id, account);
    // In a real implementation, this would call an API to update the account
  };

  const handleDeleteAccount = (id: string) => {
    console.log("Deleting account:", id);
    // In a real implementation, this would call an API to delete the account
  };

  return (
    <>
      <Helmet>
        <title>Subscriber Dashboard | TradeRiser</title>
      </Helmet>

      <DashboardLayout
        userRole="subscriber"
        username={username}
        avatarUrl={avatarUrl}
        notificationCount={notificationCount}
      >
        <div className="flex flex-col space-y-8 pb-10 bg-black text-white">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Subscriber Dashboard</h1>
            <p className="text-gray-400">Welcome back, {username}</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Trade Accounts Section */}
            <TradeAccountsSection
              accounts={tradeAccounts}
              onAddAccount={handleAddAccount}
              onEditAccount={handleEditAccount}
              onDeleteAccount={handleDeleteAccount}
            />

            {/* Subscriptions Section */}
            <SubscriptionsSection
              subscriptions={subscriptions}
              tradeAccounts={tradeAccounts.map((account) => ({
                id: account.id,
                name: account.nickname || account.brokerName,
              }))}
            />

            {/* Copied Trades Section */}
            <CopiedTradesSection
              tradeAccounts={tradeAccounts.map(
                (account) => account.nickname || account.brokerName,
              )}
              signalAccounts={subscriptions.map((sub) => sub.signalAccountName)}
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default SubscriberDashboard;
