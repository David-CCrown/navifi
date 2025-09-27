"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Wallet } from "lucide-react";

const profileSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email").optional(),
  telegram: z.string().optional(),
});

type ProfileForm = z.infer<typeof profileSchema>;

export default function SettingsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: { username: "", email: "", telegram: "" },
  });

  const onSubmit = (values: ProfileForm) => {
    console.log("✅ Settings saved:", values);
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your profile, preferences, and integrations.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/40 backdrop-blur-md rounded-lg p-1">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="danger">Danger Zone</TabsTrigger>
          </TabsList>

          {/* Profile */}
          <TabsContent value="profile">
            <Card className="backdrop-blur-xl border-border/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Profile</CardTitle>
                <CardDescription>
                  Customize your NaviFi identity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Wallet */}
                  <div>
                    <Label>Wallet</Label>
                    <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 mt-1">
                      <Wallet className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">
                        YourConnectedWalletAddress
                      </span>
                    </div>
                  </div>

                  {/* Username */}
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" {...register("username")} className="mt-1" />
                    {errors.username && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email (optional)</Label>
                    <Input id="email" type="email" {...register("email")} className="mt-1" />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Telegram */}
                  <div>
                    <Label htmlFor="telegram">Telegram (optional)</Label>
                    <Input id="telegram" {...register("telegram")} className="mt-1" />
                  </div>

                  <Button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] text-white shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
                  >
                    Save Profile
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences">
            <Card className="backdrop-blur-xl border-border/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Preferences</CardTitle>
                <CardDescription>
                  Personalize your experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label>Dark Mode</Label>
                  <Switch />
                </div>

                <div>
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-40 mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <Label>Notifications</Label>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations">
            <Card className="backdrop-blur-xl border-border/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Integrations</CardTitle>
                <CardDescription>
                  Connect external services like Telegram or email alerts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Telegram Bot</span>
                  <Button size="sm" variant="outline" className="rounded-full">
                    Connect
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Email Alerts</span>
                  <Button size="sm" variant="outline" className="rounded-full">
                    Enable
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Danger Zone */}
          <TabsContent value="danger">
            <Card className="border-destructive/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-destructive">
                  Danger Zone
                </CardTitle>
                <CardDescription>
                  Manage sensitive actions like disconnecting your wallet.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="destructive" className="w-full rounded-full">
                  Disconnect Wallet
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  Delete Account Data
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
