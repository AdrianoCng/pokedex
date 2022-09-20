import styles from "./TextInput.module.scss";

interface Props {
    value: string;
    name: string;
    onChange: (value: string) => void;
    className?: string;
    labelClassName?: string;
    placeholder?: string;
    label?: string;
    fullWidth?: boolean;
}
export default function TextInput({
    onChange,
    className,
    label,
    labelClassName,
    fullWidth = false,
    ...props
}: Props) {
    const classes = [styles.input, className && className, fullWidth && styles.full_width]
        .filter((cl) => !!cl)
        .join(" ");
    const labelClasses = [
        styles.label,
        labelClassName && labelClassName,
        fullWidth && styles.full_width,
    ]
        .filter((cl) => !!cl)
        .join(" ");

    return (
        <label className={labelClasses}>
            {label}
            <input
                {...props}
                className={classes}
                type="text"
                onChange={(e) => onChange(e.currentTarget.value)}
            />
        </label>
    );
}
