import { useTransition } from "react";


import { Button } from "./ui/button";

type Props = {
    label: string;
    onClick: () => Promise<void>;
};

function TransitionButton({ label, onClick }: Props) {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(async () => onClick());
    };

    return (
        <Button disabled={isPending} onClick={handleClick}>
            {label}
        </Button>
    );
}

export default TransitionButton;