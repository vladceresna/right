<script>
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
		Badge,
		Button,
		ModeSwitcher,
		AlertDialog,
		AlertDialogTrigger,
		AlertDialogContent,
		AlertDialogHeader,
		AlertDialogTitle,
		AlertDialogFooter,
		AlertDialogCancel,
		AlertDialogDescription,
		AlertDialogAction,
		buttonVariants,
        Card,
        CardHeader,
        CardContent,
        CardTitle,
        CardDescription,
        CardFooter,
        CardAction,
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuContent,
		DropdownMenuItem,
		Popover,
		PopoverTrigger,
		PopoverContent,
		Progress,
		TooltipTrigger,
		TooltipContent,
		TooltipProvider,
		TooltipRoot,
	} from "$lib/index.js";

</script>
<div class="p-20">
    <Button>Button</Button>
    <ModeSwitcher/>
    <Badge>FactType</Badge>


</div>
<div class="p-20">
 
    <Accordion type="single" class="w-full sm:max-w-[70%]" value="item-1">
    <AccordionItem value="item-1">
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent class="flex flex-col gap-4 text-balance">
    <p>
        Our flagship product combines cutting-edge technology with sleek design.
        Built with premium materials, it offers unparalleled performance and
        reliability.
    </p>
    <p>
        Key features include advanced processing capabilities, and an intuitive
        user interface designed for both beginners and experts.
    </p>
    </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent class="flex flex-col gap-4 text-balance">
    <p>
        We offer worldwide shipping through trusted courier partners. Standard
        delivery takes 3-5 business days, while express shipping ensures
        delivery within 1-2 business days.
    </p>
    <p>
        All orders are carefully packaged and fully insured. Track your shipment
        in real-time through our dedicated tracking portal.
    </p>
    </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
    <AccordionTrigger>Return Policy</AccordionTrigger>
    <AccordionContent class="flex flex-col gap-4 text-balance">
    <p>
        We stand behind our products with a comprehensive 30-day return policy.
        If you&apos;re not completely satisfied, simply return the item in its
        original condition.
    </p>
    <p>
        Our hassle-free return process includes free return shipping and full
        refunds processed within 48 hours of receiving the returned item.
    </p>
    </AccordionContent>
    </AccordionItem>
    </Accordion>
</div>

<div class="p-20">
 
    <AlertDialog>
    <AlertDialogTrigger class={buttonVariants({ variant: "outline" })}>
    Show Dialog
    </AlertDialogTrigger>
    <AlertDialogContent>
    <AlertDialogHeader>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
    </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
    <AlertDialogCancel>Cancel</AlertDialogCancel>
    <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
</div>
<div class="p-20 gap-10 flex">
<Card>
    <CardHeader>
        <CardTitle>Card Example</CardTitle>
    </CardHeader>
    <CardContent>
        <p>This is a card component from Shadcn.</p>
    </CardContent>
    <CardFooter>
        <Button>Click Me</Button>
    </CardFooter>
</Card>

<DropdownMenu>
    <DropdownMenuTrigger class={buttonVariants({ variant: "default" })}>
        Open Dropdown
    </DropdownMenuTrigger>
    <DropdownMenuContent class="p-2">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>

<Popover>
    <PopoverTrigger class={buttonVariants({ variant: "secondary" })}>
        Show Popover
    </PopoverTrigger>
    <PopoverContent class="p-4">
        <p>This is a popover component.</p>
    </PopoverContent>
</Popover>

<Progress value={50} max={100} class="w-full" />

<TooltipProvider>
    <TooltipRoot>
        <TooltipTrigger>
            <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
            <p>This is a tooltip content.</p>
        </TooltipContent>
    </TooltipRoot>
</TooltipProvider>

</div>