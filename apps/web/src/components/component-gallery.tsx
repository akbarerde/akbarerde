"use client"

import * as React from "react"
import { motion } from "motion/react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  BoldIcon,
  BookmarkIcon,
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  CloudIcon,
  CreditCardIcon,
  FileTextIcon,
  FolderIcon,
  HomeIcon,
  ImageIcon,
  InfoIcon,
  ItalicIcon,
  LayoutDashboardIcon,
  Loader2Icon,
  MailIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
  PaletteIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  TrashIcon,
  TriangleAlertIcon,
  UnderlineIcon,
  UserIcon,
  UsersIcon,
  XIcon,
  ZapIcon,
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { cn } from "@workspace/ui/lib/utils"

import { ScrollProgress, SectionNav } from "@/components/gallery-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@workspace/ui/components/attachment"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@workspace/ui/components/bubble"
import { Button } from "@workspace/ui/components/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@workspace/ui/components/button-group"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@workspace/ui/components/chart"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@workspace/ui/components/code-block"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { DirectionProvider } from "@workspace/ui/components/direction"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { Input } from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Label } from "@workspace/ui/components/label"
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@workspace/ui/components/marker"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@workspace/ui/components/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@workspace/ui/components/message-scroller"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireTitle,
} from "@workspace/ui/components/questionnaire"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@workspace/ui/components/sidebar"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Slider } from "@workspace/ui/components/slider"
import { Spinner } from "@workspace/ui/components/spinner"
import { Switch } from "@workspace/ui/components/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { Textarea } from "@workspace/ui/components/textarea"
import { Toaster, toast } from "@workspace/ui/components/toast"
import { Toggle } from "@workspace/ui/components/toggle"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@workspace/ui/components/trace"

const sections = [
  {
    id: "foundations",
    title: "Foundations & actions",
    description:
      "The primitives that set tone, spacing, and interaction across the system.",
    count: 10,
  },
  {
    id: "forms",
    title: "Forms",
    description: "Inputs, pickers, validation, and multi-step data collection.",
    count: 15,
  },
  {
    id: "navigation",
    title: "Navigation",
    description:
      "Wayfinding for pages, commands, and dense application chrome.",
    count: 6,
  },
  {
    id: "overlays",
    title: "Overlays",
    description:
      "Layered surfaces for focus, confirmation, and contextual detail.",
    count: 9,
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Status, progress, empty states, and transient notifications.",
    count: 4,
  },
  {
    id: "data-display",
    title: "Data display",
    description:
      "Structured content, collections, and rich presentation surfaces.",
    count: 6,
  },
  {
    id: "layout",
    title: "Layout & media",
    description: "Structure, disclosure, resizing, and spatial composition.",
    count: 7,
  },
  {
    id: "ai",
    title: "AI & chat",
    description:
      "Conversation primitives for assistants, agents, and streaming output.",
    count: 6,
  },
] as const

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "vite", label: "Vite" },
]

const fruits = [
  "Apple",
  "Banana",
  "Blueberry",
  "Grape",
  "Orange",
  "Peach",
  "Pineapple",
]

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 173, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 264, mobile: 140 },
]

const snippet = `import { Button } from "@workspace/ui/components/button"

export function DeployButton() {
  return <Button>Deploy to production</Button>
}`

const questions = [
  {
    name: "role",
    choices: [
      { value: "engineering" },
      { value: "design" },
      { value: "product" },
    ],
  },
  { name: "team" },
] as const

const scrollerMessages = [
  { align: "start" as const, text: "I pulled the latest deployment logs." },
  { align: "end" as const, text: "Any errors in the build step?" },
  { align: "start" as const, text: "None. All 42 checks passed in 1m 12s." },
  { align: "end" as const, text: "Great, ship it." },
  { align: "start" as const, text: "Deploying to production now." },
  { align: "start" as const, text: "Traffic is shifting to the new revision." },
  { align: "end" as const, text: "Watching the error rate." },
  {
    align: "start" as const,
    text: "Error rate is flat at 0.02%. Deploy complete.",
  },
]

export function ComponentGallery() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 0, 15)
  )

  return (
    <div className="min-h-svh bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="font-heading text-sm font-semibold tracking-tight"
          >
            ERDE
          </a>
          <Separator orientation="vertical" className="h-4" />
          <nav className="flex items-center gap-4 text-sm">
            <a
              href="/components"
              aria-current="page"
              className="font-medium text-foreground"
            >
              Components
            </a>
            <a
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </a>
          </nav>
          <Badge variant="outline" className="ml-auto font-mono">
            63
          </Badge>
        </div>
        <ScrollProgress />
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 border-b pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-heading text-3xl font-semibold tracking-tight">
              Components
            </h1>
            <Badge variant="secondary">63 components</Badge>
          </div>
          <p className="max-w-2xl text-sm text-pretty text-muted-foreground sm:text-base">
            Every component installed in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
              @workspace/ui
            </code>
            , rendered with the default shadcn/ui styles. Each demo is
            interactive and uses the same source files as the app.
          </p>
        </div>

        <SectionNav sections={sections} />

        <div className="flex flex-col gap-16 pt-10">
          <Section section={sections[0]} entrance>
            <Demo
              title="Button"
              description="Six variants and seven sizes with icon support."
            >
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="xs">Extra small</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Add">
                  <PlusIcon />
                </Button>
              </div>
            </Demo>

            <Demo
              title="Button Group"
              description="Related actions joined into a single control."
            >
              <ButtonGroup>
                <Button variant="outline">
                  <ArrowLeftIcon /> Back
                </Button>
                <ButtonGroupSeparator />
                <Button variant="outline">
                  Forward <ArrowRightIcon />
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="outline" size="icon" aria-label="Share">
                  <ShareIcon />
                </Button>
                <Button variant="outline" size="icon" aria-label="More">
                  <MoreHorizontalIcon />
                </Button>
                <Button variant="outline" size="icon" aria-label="Delete">
                  <TrashIcon />
                </Button>
              </ButtonGroup>
            </Demo>

            <Demo
              title="Toggle"
              description="A single pressed state, with or without a label."
            >
              <div className="flex flex-wrap items-center gap-2">
                <Toggle aria-label="Bookmark">
                  <BookmarkIcon />
                </Toggle>
                <Toggle variant="outline">
                  <BookmarkIcon /> Saved
                </Toggle>
                <Toggle variant="outline" defaultPressed>
                  <CheckIcon /> Following
                </Toggle>
              </div>
            </Demo>

            <Demo
              title="Toggle Group"
              description="Segmented controls for exclusive or multiple choices."
            >
              <ToggleGroup defaultValue={["bold"]} aria-label="Text formatting">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <BoldIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <ItalicIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <UnderlineIcon />
                </ToggleGroupItem>
              </ToggleGroup>
            </Demo>

            <Demo
              title="Badge"
              description="Compact status and metadata labels."
            >
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="ghost">Ghost</Badge>
              </div>
            </Demo>

            <Demo
              title="Kbd"
              description="Keyboard hints that match the rest of the system."
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  Command palette <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>⇧</Kbd>
                  <Kbd>P</Kbd>
                </KbdGroup>
              </div>
            </Demo>

            <Demo
              title="Separator"
              description="Horizontal and vertical dividers."
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <span>Draft</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>Review</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>Published</span>
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  Content below a horizontal separator.
                </p>
              </div>
            </Demo>

            <Demo
              title="Skeleton"
              description="Placeholder shapes for loading content."
            >
              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="flex flex-1 flex-col gap-2">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <Skeleton className="h-3 w-3/5" />
              </div>
            </Demo>

            <Demo
              title="Spinner"
              description="An indeterminate loading indicator."
            >
              <div className="flex items-center gap-4">
                <Spinner />
                <Spinner className="size-6" />
                <Button disabled>
                  <Spinner /> Deploying
                </Button>
              </div>
            </Demo>

            <Demo
              title="Direction"
              description="Base UI direction context for RTL layouts."
            >
              <DirectionProvider direction="rtl">
                <div
                  dir="rtl"
                  className="rounded-lg border border-dashed p-4 text-right"
                >
                  <p className="font-heading text-base font-medium">
                    مرحبًا بك في ERDE
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    واجهة عربية تعمل من اليمين إلى اليسار.
                  </p>
                </div>
              </DirectionProvider>
            </Demo>
          </Section>

          <Section section={sections[1]}>
            <Demo title="Input" description="Single-line text entry.">
              <Input type="email" placeholder="you@example.com" />
              <Input placeholder="Disabled input" disabled />
            </Demo>

            <Demo title="Textarea" description="Multi-line text entry.">
              <Textarea
                placeholder="Tell us about your project…"
                className="min-h-24"
              />
            </Demo>

            <Demo
              title="Label"
              description="Accessible labels paired with controls."
            >
              <div className="grid gap-2">
                <Label htmlFor="gallery-name">Display name</Label>
                <Input id="gallery-name" placeholder="Akbar Erde" />
              </div>
            </Demo>

            <Demo
              title="Checkbox"
              description="Binary selection with indeterminate support."
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Checkbox id="gallery-terms" defaultChecked />
                  <Label htmlFor="gallery-terms">
                    Accept terms and conditions
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="gallery-news" />
                  <Label htmlFor="gallery-news">Send me product news</Label>
                </div>
              </div>
            </Demo>

            <Demo
              title="Radio Group"
              description="A single choice from a short list."
            >
              <RadioGroup
                defaultValue="starter"
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="starter" id="plan-starter" />
                  <Label htmlFor="plan-starter">Starter</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="pro" id="plan-pro" />
                  <Label htmlFor="plan-pro">Pro</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="enterprise" id="plan-enterprise" />
                  <Label htmlFor="plan-enterprise">Enterprise</Label>
                </div>
              </RadioGroup>
            </Demo>

            <Demo title="Switch" description="An immediate on/off setting.">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <Label htmlFor="gallery-sync">Cloud sync</Label>
                    <span className="text-xs text-muted-foreground">
                      Keep files in sync across devices.
                    </span>
                  </div>
                  <Switch id="gallery-sync" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <Label htmlFor="gallery-analytics">Usage analytics</Label>
                    <span className="text-xs text-muted-foreground">
                      Share anonymous usage data.
                    </span>
                  </div>
                  <Switch id="gallery-analytics" />
                </div>
              </div>
            </Demo>

            <Demo title="Slider" description="Continuous numeric selection.">
              <div className="flex flex-col gap-4">
                <Slider
                  defaultValue={[40]}
                  max={100}
                  step={1}
                  aria-label="Volume"
                />
                <Slider
                  defaultValue={[20, 80]}
                  max={100}
                  step={1}
                  aria-label="Range"
                />
              </div>
            </Demo>

            <Demo
              title="Select"
              description="A keyboard-friendly dropdown picker."
            >
              <Select items={frameworks} defaultValue="next">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a framework" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Demo>

            <Demo
              title="Native Select"
              description="The platform select, styled to match."
            >
              <NativeSelect defaultValue="next" aria-label="Framework">
                {frameworks.map((framework) => (
                  <NativeSelectOption
                    key={framework.value}
                    value={framework.value}
                  >
                    {framework.label}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </Demo>

            <Demo
              title="Combobox"
              description="Searchable selection with filtering."
            >
              <Combobox items={fruits}>
                <ComboboxInput placeholder="Search fruit…" showClear />
                <ComboboxContent>
                  <ComboboxEmpty>No fruit found.</ComboboxEmpty>
                  <ComboboxList>
                    {(fruit) => (
                      <ComboboxItem key={fruit} value={fruit}>
                        {fruit}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Demo>

            <Demo
              title="Input Group"
              description="Inputs with leading and trailing addons."
            >
              <InputGroup>
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search components…" />
                <InputGroupAddon align="inline-end">
                  <Kbd>/</Kbd>
                </InputGroupAddon>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon>
                  <MailIcon />
                </InputGroupAddon>
                <InputGroupInput type="email" placeholder="you@example.com" />
              </InputGroup>
            </Demo>

            <Demo
              title="Input OTP"
              description="Segmented one-time-code entry."
            >
              <InputOTP maxLength={6} aria-label="One-time password">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </Demo>

            <Demo
              title="Calendar"
              description="Date picking with a static default month."
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                defaultMonth={new Date(2026, 0, 1)}
                className="rounded-lg border"
              />
            </Demo>

            <Demo
              title="Field"
              description="Label, control, description, and error composition."
            >
              <FieldSet>
                <FieldLegend>Profile</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="field-email">Email</FieldLabel>
                    <Input
                      id="field-email"
                      type="email"
                      placeholder="you@example.com"
                    />
                    <FieldDescription>
                      Used for account notifications only.
                    </FieldDescription>
                  </Field>
                  <Field orientation="horizontal">
                    <Checkbox id="field-updates" defaultChecked />
                    <FieldContent>
                      <FieldTitle>Product updates</FieldTitle>
                      <FieldDescription>
                        Occasional release notes and changelog digests.
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </Demo>

            <Demo
              title="Questionnaire"
              description="Multi-step questions with progress, shortcuts, and validation."
              className="md:col-span-2 xl:col-span-3"
              bodyClassName="md:max-w-2xl"
            >
              <Questionnaire
                items={questions}
                shortcuts="letters"
                onSubmit={(event) => event.preventDefault()}
              >
                <QuestionnaireProgress />
                <QuestionnaireItem name="role">
                  <QuestionnaireTitle>
                    What best describes your role?
                  </QuestionnaireTitle>
                  <QuestionnaireDescription>
                    This helps us tailor the examples you see first.
                  </QuestionnaireDescription>
                  <QuestionnaireChoices>
                    <QuestionnaireChoice value="engineering">
                      Engineering
                      <QuestionnaireChoiceDescription>
                        I build and ship software.
                      </QuestionnaireChoiceDescription>
                    </QuestionnaireChoice>
                    <QuestionnaireChoice value="design">
                      Design
                      <QuestionnaireChoiceDescription>
                        I shape product and brand experiences.
                      </QuestionnaireChoiceDescription>
                    </QuestionnaireChoice>
                    <QuestionnaireChoice value="product">
                      Product
                      <QuestionnaireChoiceDescription>
                        I define what we build and why.
                      </QuestionnaireChoiceDescription>
                    </QuestionnaireChoice>
                  </QuestionnaireChoices>
                </QuestionnaireItem>
                <QuestionnaireItem name="team">
                  <QuestionnaireTitle>
                    What is your team called?
                  </QuestionnaireTitle>
                  <QuestionnaireDescription>
                    We will use this to label your workspace.
                  </QuestionnaireDescription>
                  <QuestionnaireInput placeholder="Platform team" />
                </QuestionnaireItem>
                <QuestionnaireActions>
                  <QuestionnairePrevious />
                  <QuestionnaireSkip />
                  <QuestionnaireNext />
                </QuestionnaireActions>
              </Questionnaire>
            </Demo>
          </Section>

          <Section section={sections[2]}>
            <Demo
              title="Breadcrumb"
              description="Hierarchical location with overflow support."
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#navigation">
                      <HomeIcon className="size-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#navigation">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Demo>

            <Demo
              title="Pagination"
              description="Page navigation for long result sets."
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#navigation" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#navigation" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#navigation">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#navigation">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#navigation" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </Demo>

            <Demo
              title="Tabs"
              description="Switch between related views in place."
            >
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="overview"
                  className="rounded-lg border p-3 text-sm text-muted-foreground"
                >
                  A summary of the current workspace and its recent changes.
                </TabsContent>
                <TabsContent
                  value="activity"
                  className="rounded-lg border p-3 text-sm text-muted-foreground"
                >
                  Seven deploys, three reviews, and one incident this week.
                </TabsContent>
                <TabsContent
                  value="settings"
                  className="rounded-lg border p-3 text-sm text-muted-foreground"
                >
                  Configure members, billing, and integrations.
                </TabsContent>
              </Tabs>
            </Demo>

            <Demo
              title="Navigation Menu"
              description="Rich, hoverable site navigation."
            >
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-64 gap-1 p-1">
                        <li>
                          <NavigationMenuLink href="#navigation">
                            <ZapIcon /> Automations
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="#navigation">
                            <PaletteIcon /> Design system
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="#navigation">
                            <CloudIcon /> Hosting
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#navigation">
                      Docs
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#navigation">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </Demo>

            <Demo
              title="Menubar"
              description="A desktop-style application menu."
            >
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New file <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Open… <MenubarShortcut>⌘O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Save <MenubarShortcut>⌘S</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Select all</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Toggle sidebar</MenubarItem>
                    <MenubarItem>Zoom in</MenubarItem>
                    <MenubarItem>Zoom out</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </Demo>

            <Demo
              title="Command"
              description="Searchable command palette in place."
            >
              {/* A non-existent default stops cmdk from selecting an item and
                  scrolling the page on mount. */}
              <Command
                className="h-64 rounded-lg border"
                defaultValue="__none__"
              >
                <CommandInput placeholder="Type a command or search…" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <CalendarIcon /> Calendar
                    </CommandItem>
                    <CommandItem>
                      <SearchIcon /> Search
                    </CommandItem>
                    <CommandItem>
                      <SettingsIcon /> Settings
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Actions">
                    <CommandItem>
                      <PlusIcon /> New project
                    </CommandItem>
                    <CommandItem>
                      <UsersIcon /> Invite teammate
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </Demo>
          </Section>

          <Section section={sections[3]}>
            <Demo title="Dialog" description="A modal for focused tasks.">
              <Dialog>
                <DialogTrigger
                  render={<Button variant="outline" className="w-fit" />}
                >
                  Edit profile
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-2 py-2">
                    <Label htmlFor="dialog-name">Name</Label>
                    <Input id="dialog-name" defaultValue="Akbar Erde" />
                  </div>
                  <DialogFooter>
                    <DialogClose render={<Button variant="outline" />}>
                      Cancel
                    </DialogClose>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Demo>

            <Demo
              title="Alert Dialog"
              description="A blocking confirmation for risky actions."
            >
              <AlertDialog>
                <AlertDialogTrigger
                  render={<Button variant="destructive" className="w-fit" />}
                >
                  Delete project
                </AlertDialogTrigger>
                <AlertDialogContent size="sm">
                  <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                      <TriangleAlertIcon />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Delete this project?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This permanently removes the project and all of its
                      deployments.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel variant="ghost">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="destructive">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Demo>

            <Demo
              title="Sheet"
              description="A side panel for secondary workflows."
            >
              <Sheet>
                <SheetTrigger
                  render={<Button variant="outline" className="w-fit" />}
                >
                  Open sheet
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Project settings</SheetTitle>
                    <SheetDescription>
                      Manage the project name and visibility.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-2 px-4">
                    <Label htmlFor="sheet-name">Project name</Label>
                    <Input id="sheet-name" defaultValue="ERDE" />
                  </div>
                  <SheetFooter>
                    <SheetClose render={<Button variant="outline" />}>
                      Cancel
                    </SheetClose>
                    <Button>Save</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </Demo>

            <Demo
              title="Drawer"
              description="A bottom sheet for touch-first flows."
            >
              <Drawer>
                <DrawerTrigger
                  render={<Button variant="outline" className="w-fit" />}
                >
                  Open drawer
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Quick actions</DrawerTitle>
                    <DrawerDescription>
                      Common tasks for the current project.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="flex flex-col gap-1 px-4">
                    <Button variant="ghost" className="justify-start">
                      <PlusIcon /> New deployment
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <UsersIcon /> Invite teammate
                    </Button>
                  </div>
                  <DrawerFooter>
                    <DrawerClose render={<Button variant="outline" />}>
                      Close
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Demo>

            <Demo title="Popover" description="An anchored floating panel.">
              <Popover>
                <PopoverTrigger
                  render={<Button variant="outline" className="w-fit" />}
                >
                  Open popover
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <PopoverHeader>
                    <PopoverTitle>Dimensions</PopoverTitle>
                    <PopoverDescription>
                      Set the size of the canvas.
                    </PopoverDescription>
                  </PopoverHeader>
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <div className="grid gap-1">
                      <Label htmlFor="popover-width" className="text-xs">
                        Width
                      </Label>
                      <Input id="popover-width" defaultValue="1024" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="popover-height" className="text-xs">
                        Height
                      </Label>
                      <Input id="popover-height" defaultValue="768" />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </Demo>

            <Demo title="Hover Card" description="A rich preview on hover.">
              <HoverCard>
                <HoverCardTrigger
                  render={<Button variant="link" className="w-fit" />}
                >
                  @akbarerde
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex gap-3">
                    <Avatar size="lg">
                      <AvatarFallback>AE</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">Akbar Erde</span>
                      <span className="text-xs text-muted-foreground">
                        Maintains the ERDE design system.
                      </span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </Demo>

            <Demo
              title="Tooltip"
              description="Short contextual help on hover and focus."
            >
              <Tooltip>
                <TooltipTrigger
                  render={<Button variant="outline" size="icon" />}
                  aria-label="Add to library"
                >
                  <PlusIcon />
                </TooltipTrigger>
                <TooltipContent>
                  Add to library <Kbd>⌘</Kbd>
                </TooltipContent>
              </Tooltip>
            </Demo>

            <Demo title="Dropdown Menu" description="A contextual action menu.">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button variant="outline" className="w-fit" />}
                >
                  Actions
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My account</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <UserIcon /> Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCardIcon /> Billing
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SettingsIcon /> Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <TrashIcon /> Delete account
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Demo>

            <Demo
              title="Context Menu"
              description="Actions revealed by right-click."
            >
              <ContextMenu>
                <ContextMenuTrigger className="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm text-muted-foreground">
                  Right-click anywhere here
                </ContextMenuTrigger>
                <ContextMenuContent className="w-48">
                  <ContextMenuGroup>
                    <ContextMenuLabel>File</ContextMenuLabel>
                    <ContextMenuItem>
                      Open <ContextMenuShortcut>⌘O</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      Rename <ContextMenuShortcut>F2</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      Duplicate <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuItem variant="destructive">
                    Delete <ContextMenuShortcut>⌫</ContextMenuShortcut>
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </Demo>
          </Section>

          <Section section={sections[4]}>
            <Demo
              title="Alert"
              description="Inline status with an optional action."
              className="md:col-span-2"
            >
              <Alert>
                <InfoIcon />
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the CLI.
                </AlertDescription>
                <AlertAction>
                  <Button size="xs" variant="outline">
                    Upgrade
                  </Button>
                </AlertAction>
              </Alert>
              <Alert variant="destructive">
                <TriangleAlertIcon />
                <AlertTitle>Deployment failed</AlertTitle>
                <AlertDescription>
                  The build exited with code 1. Check the logs for details.
                </AlertDescription>
              </Alert>
            </Demo>

            <Demo
              title="Progress"
              description="Determinate and labelled progress."
            >
              <Progress value={62}>
                <ProgressLabel>Uploading assets</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress value={18}>
                <ProgressLabel>Indexing</ProgressLabel>
                <ProgressValue />
              </Progress>
            </Demo>

            <Demo
              title="Toast"
              description="Transient notifications with status icons."
            >
              <div className="flex flex-col items-start gap-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    toast.add({
                      title: "Invite sent",
                      description:
                        "Your teammate will receive an email shortly.",
                      type: "success",
                    })
                  }
                >
                  Show success toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast.add({
                      title: "Deploy queued",
                      description: "We will notify you when it completes.",
                      type: "loading",
                    })
                  }
                >
                  Show loading toast
                </Button>
              </div>
            </Demo>

            <Demo title="Empty" description="A purposeful zero state.">
              <Empty className="border">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <FolderIcon />
                  </EmptyMedia>
                  <EmptyTitle>No projects yet</EmptyTitle>
                  <EmptyDescription>
                    Create a project to get started.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button size="sm">
                    <PlusIcon /> New project
                  </Button>
                </EmptyContent>
              </Empty>
            </Demo>
          </Section>

          <Section section={sections[5]}>
            <Demo
              title="Card"
              description="A contained surface for grouped content."
            >
              <Card>
                <CardHeader>
                  <CardTitle>Deployment</CardTitle>
                  <CardDescription>
                    Your site is live on the edge.
                  </CardDescription>
                  <CardAction>
                    <Badge variant="secondary">Live</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The latest revision rolled out to 12 regions with no errors.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Open dashboard</Button>
                </CardFooter>
              </Card>
            </Demo>

            <Demo
              title="Table"
              description="Dense tabular data with captions and footers."
              className="md:col-span-2"
            >
              <Table>
                <TableCaption>
                  Recent invoices for the current workspace.
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV-001</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Paid</Badge>
                    </TableCell>
                    <TableCell>Credit card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV-002</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pending</Badge>
                    </TableCell>
                    <TableCell>Bank transfer</TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV-003</TableCell>
                    <TableCell>
                      <Badge variant="outline">Draft</Badge>
                    </TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$1,250.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </Demo>

            <Demo
              title="Item"
              description="A flexible row for lists and settings."
            >
              <ItemGroup>
                <Item variant="outline">
                  <ItemMedia variant="icon">
                    <CloudIcon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Cloud sync</ItemTitle>
                    <ItemDescription>
                      Keep files in sync across devices.
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Switch defaultChecked aria-label="Cloud sync" />
                  </ItemActions>
                </Item>
                <Item variant="muted">
                  <ItemMedia variant="icon">
                    <BellIcon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Notifications</ItemTitle>
                    <ItemDescription>
                      Mentions, reviews, and deploy status.
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button size="xs" variant="outline">
                      Configure
                    </Button>
                  </ItemActions>
                </Item>
              </ItemGroup>
            </Demo>

            <Demo
              title="Avatar"
              description="Images, fallbacks, badges, and stacks."
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>AE</AvatarFallback>
                  </Avatar>
                  <Avatar size="lg">
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback>UI</AvatarFallback>
                  </Avatar>
                </div>
                <AvatarGroup>
                  <Avatar>
                    <AvatarFallback>AE</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>RN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <AvatarGroupCount>+3</AvatarGroupCount>
                </AvatarGroup>
              </div>
            </Demo>

            <Demo
              title="Chart"
              description="Recharts wrapped in a themed container."
              className="md:col-span-2"
            >
              <ChartContainer config={chartConfig} className="h-64 w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </Demo>

            <Demo
              title="Code Block"
              description="Copyable code with line numbers."
              className="md:col-span-2"
            >
              <CodeBlock>
                <CodeBlockHeader>
                  <CodeBlockTitle>
                    apps/web/src/components/deploy-button.tsx
                  </CodeBlockTitle>
                  <CodeBlockActions>
                    <CodeBlockCopyButton value={snippet} />
                  </CodeBlockActions>
                </CodeBlockHeader>
                <CodeBlockContent lineNumbers>{snippet}</CodeBlockContent>
              </CodeBlock>
            </Demo>
          </Section>

          <Section section={sections[6]}>
            <Demo
              title="Accordion"
              description="Progressive disclosure for FAQs and details."
            >
              <Accordion defaultValue={["shipping"]}>
                <AccordionItem value="shipping">
                  <AccordionTrigger>How do I track my order?</AccordionTrigger>
                  <AccordionContent>
                    You will receive a tracking link by email as soon as the
                    carrier scans the package.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>
                    What is the return policy?
                  </AccordionTrigger>
                  <AccordionContent>
                    Returns are accepted within 30 days of delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger>How do I contact support?</AccordionTrigger>
                  <AccordionContent>
                    Reply to any order email and a human will pick it up.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Demo>

            <Demo title="Collapsible" description="A single expandable region.">
              <Collapsible defaultOpen>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Advanced settings</span>
                  <CollapsibleTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="group"
                      />
                    }
                    aria-label="Toggle settings"
                  >
                    <ChevronRightIcon className="transition-transform duration-200 group-data-[panel-open]:rotate-90" />
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
                  Configure cache headers, redirects, and build environment
                  variables for this project.
                </CollapsibleContent>
              </Collapsible>
            </Demo>

            <Demo
              title="Aspect Ratio"
              description="Locked proportions for media surfaces."
            >
              <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded-lg border bg-muted/40"
              >
                <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
                  16 : 9
                </div>
              </AspectRatio>
            </Demo>

            <Demo
              title="Scroll Area"
              description="A styled, bounded scroll container."
            >
              <ScrollArea className="h-40 rounded-lg border">
                <div className="flex flex-col gap-2 p-3">
                  {Array.from({ length: 10 }, (_, index) => (
                    <div
                      key={index}
                      className="rounded-md bg-muted px-3 py-2 text-sm"
                    >
                      Item {index + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Demo>

            <Demo
              title="Carousel"
              description="Touch-friendly slides with previous and next controls."
              className="md:col-span-2"
            >
              <div className="px-12">
                <Carousel className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 5 }, (_, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-1/2 lg:basis-1/3"
                      >
                        <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted/40">
                          <span className="font-heading text-2xl font-semibold">
                            {index + 1}
                          </span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </Demo>

            <Demo
              title="Resizable"
              description="Drag to resize adjacent panels."
              className="md:col-span-2"
            >
              <ResizablePanelGroup
                orientation="horizontal"
                className="h-48 overflow-hidden rounded-lg border"
              >
                <ResizablePanel defaultSize="35%">
                  <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
                    Sidebar
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="65%">
                  <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
                    Content
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </Demo>

            <Demo
              title="Sidebar"
              description="Inline application navigation with groups and menus."
              className="md:col-span-2 xl:col-span-3"
            >
              <SidebarProvider className="h-80 min-h-0 w-full overflow-hidden rounded-lg border">
                <Sidebar collapsible="none">
                  <SidebarHeader>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <ZapIcon className="size-4" />
                          </div>
                          <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">ERDE</span>
                            <span className="truncate text-xs text-muted-foreground">
                              Workspace
                            </span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>Platform</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton isActive>
                              <LayoutDashboardIcon /> Dashboard
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <FolderIcon /> Projects
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <UsersIcon /> Team
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarFooter>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SettingsIcon /> Settings
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarFooter>
                </Sidebar>
                <div className="flex flex-1 items-center justify-center bg-muted/30 p-6 text-center text-sm text-muted-foreground">
                  The content area sits beside the inline sidebar.
                </div>
              </SidebarProvider>
            </Demo>
          </Section>

          <Section section={sections[7]}>
            <Demo
              title="Bubble"
              description="Chat bubbles with variants and reactions."
            >
              <BubbleGroup>
                <Bubble variant="secondary">
                  <BubbleContent>
                    Can you summarize the latest deploy?
                  </BubbleContent>
                </Bubble>
                <Bubble align="end">
                  <BubbleContent>
                    All green. 42 tests passed in 1m 12s.
                  </BubbleContent>
                  <BubbleReactions>👍 2</BubbleReactions>
                </Bubble>
              </BubbleGroup>
            </Demo>

            <Demo
              title="Message"
              description="Avatar, content, header, and footer composition."
            >
              <MessageGroup>
                <Message align="start">
                  <MessageAvatar>
                    <Avatar size="sm">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                  <MessageContent>
                    <MessageHeader>Assistant</MessageHeader>
                    <Bubble variant="secondary">
                      <BubbleContent>
                        I found three matching files in the repository.
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
                <Message align="end">
                  <MessageContent>
                    <Bubble>
                      <BubbleContent>Great, open the first one.</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageGroup>
            </Demo>

            <Demo
              title="Attachment"
              description="File previews with actions and states."
            >
              <AttachmentGroup>
                <Attachment state="done">
                  <AttachmentMedia>
                    <FileTextIcon />
                  </AttachmentMedia>
                  <AttachmentContent>
                    <AttachmentTitle>q3-report.pdf</AttachmentTitle>
                    <AttachmentDescription>2.4 MB · PDF</AttachmentDescription>
                  </AttachmentContent>
                  <AttachmentActions>
                    <AttachmentAction aria-label="Remove attachment">
                      <XIcon />
                    </AttachmentAction>
                  </AttachmentActions>
                </Attachment>
                <Attachment state="uploading">
                  <AttachmentMedia>
                    <ImageIcon />
                  </AttachmentMedia>
                  <AttachmentContent>
                    <AttachmentTitle>hero.png</AttachmentTitle>
                    <AttachmentDescription>
                      Uploading… 64%
                    </AttachmentDescription>
                  </AttachmentContent>
                </Attachment>
              </AttachmentGroup>
            </Demo>

            <Demo
              title="Marker"
              description="Timeline and context markers inside a conversation."
            >
              <div className="flex flex-col gap-4">
                <Marker variant="separator">
                  <MarkerContent>Today</MarkerContent>
                </Marker>
                <Marker>
                  <MarkerIcon>
                    <InfoIcon />
                  </MarkerIcon>
                  <MarkerContent>
                    Model switched to{" "}
                    <span className="font-medium text-foreground">
                      ERDE 1.0
                    </span>
                  </MarkerContent>
                </Marker>
                <Marker variant="border">
                  <MarkerIcon>
                    <MessageSquareIcon />
                  </MarkerIcon>
                  <MarkerContent>
                    Conversation started from the API.
                  </MarkerContent>
                </Marker>
              </div>
            </Demo>

            <Demo
              title="Trace"
              description="Structured agent steps with expandable detail."
            >
              <Trace>
                <TraceLine status="running">
                  <TraceIcon>
                    <Loader2Icon className="animate-spin" />
                  </TraceIcon>
                  <TraceTitle>Searching documentation</TraceTitle>
                  <TraceDescription>1.2s</TraceDescription>
                </TraceLine>
                <TraceLine status="error">
                  <TraceIcon>
                    <TriangleAlertIcon />
                  </TraceIcon>
                  <TraceTitle>Retrying fetch</TraceTitle>
                  <TraceDescription>429</TraceDescription>
                </TraceLine>
                <TraceCollapsible>
                  <TraceCollapsibleTrigger>
                    <TraceLine>
                      <TraceIcon>
                        <CheckIcon />
                      </TraceIcon>
                      <TraceTitle>Completed 4 steps</TraceTitle>
                    </TraceLine>
                  </TraceCollapsibleTrigger>
                  <TraceCollapsibleContent>
                    Parsed the query, searched the index, opened three matches,
                    and drafted a summary.
                  </TraceCollapsibleContent>
                </TraceCollapsible>
              </Trace>
            </Demo>

            <Demo
              title="Message Scroller"
              description="Bounded, auto-scrolling conversation viewport."
              className="md:col-span-2"
            >
              <div className="h-72 overflow-hidden rounded-lg border">
                <MessageScrollerProvider defaultScrollPosition="end">
                  <MessageScroller>
                    <MessageScrollerViewport>
                      <MessageScrollerContent className="flex flex-col gap-3 p-4">
                        {scrollerMessages.map((message, index) => (
                          <MessageScrollerItem
                            key={index}
                            scrollAnchor={index === scrollerMessages.length - 1}
                          >
                            <Message align={message.align}>
                              <MessageContent>
                                <Bubble
                                  variant={
                                    message.align === "end"
                                      ? "default"
                                      : "secondary"
                                  }
                                >
                                  <BubbleContent>{message.text}</BubbleContent>
                                </Bubble>
                              </MessageContent>
                            </Message>
                          </MessageScrollerItem>
                        ))}
                      </MessageScrollerContent>
                    </MessageScrollerViewport>
                    <MessageScrollerButton />
                  </MessageScroller>
                </MessageScrollerProvider>
              </div>
            </Demo>
          </Section>
        </div>
      </main>

      <footer className="border-t">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>
            63 components from{" "}
            <code className="font-mono text-xs">@workspace/ui</code>, themed
            with the <code className="font-mono text-xs">nova</code> style and{" "}
            <code className="font-mono text-xs">zinc</code> base color.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

function Section({
  section,
  children,
  entrance = false,
}: {
  section: (typeof sections)[number]
  children: React.ReactNode
  entrance?: boolean
}) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="flex flex-col gap-1 pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            {section.title}
          </h2>
          <Badge variant="secondary">{section.count}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{section.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {React.Children.map(children, (child, index) =>
          React.isValidElement<DemoProps>(child)
            ? React.cloneElement(
                child,
                entrance ? { entranceIndex: index } : {}
              )
            : child
        )}
      </div>
    </section>
  )
}

type DemoProps = {
  title: string
  description: string
  className?: string
  bodyClassName?: string
  children: React.ReactNode
  entranceIndex?: number
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

function Demo({
  title,
  description,
  className,
  bodyClassName,
  children,
  entranceIndex,
}: DemoProps) {
  const hasEntrance = entranceIndex !== undefined

  const handleSpotlight = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty(
      "--spotlight-x",
      `${event.clientX - bounds.left}px`
    )
    event.currentTarget.style.setProperty(
      "--spotlight-y",
      `${event.clientY - bounds.top}px`
    )
  }

  return (
    <motion.div
      initial={hasEntrance ? { y: 12 } : false}
      animate={hasEntrance ? { y: 0 } : undefined}
      transition={
        hasEntrance
          ? {
              duration: 0.5,
              delay: Math.min(entranceIndex * 0.04, 0.3),
              ease: easeOut,
            }
          : undefined
      }
      onPointerMove={handleSpotlight}
      className={cn("group/demo relative min-w-0", className)}
    >
      <Card className="h-full transition-shadow duration-300 group-focus-within/demo:ring-foreground/20 group-hover/demo:ring-foreground/20 motion-reduce:transition-none">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "flex min-w-0 flex-1 flex-col justify-center gap-3",
            bodyClassName
          )}
        >
          {children}
        </CardContent>
      </Card>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-focus-within/demo:opacity-100 group-hover/demo:opacity-100 motion-reduce:transition-none"
        style={{
          background:
            "radial-gradient(260px circle at var(--spotlight-x, 50%) var(--spotlight-y, 0%), color-mix(in oklab, var(--foreground) 45%, transparent), transparent 68%)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskImage:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-focus-within/demo:opacity-100 group-hover/demo:opacity-100 motion-reduce:transition-none"
        style={{
          background:
            "radial-gradient(260px circle at var(--spotlight-x, 50%) var(--spotlight-y, 0%), color-mix(in oklab, var(--foreground) 5%, transparent), transparent 65%)",
        }}
      />
    </motion.div>
  )
}
