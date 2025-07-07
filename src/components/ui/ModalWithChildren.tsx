import React, { ReactNode } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface CustomDialogProps {
    open: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: string;
    confirmColor?: "error" | "primary" | "info" | "secondary" | "warning" | "inherit";
    children?: ReactNode;
    confirmText?: string;
    cancelText?: string;
    className?: string;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
    open,
    onClose,
    onConfirm,
    title,
    isLoading = false,
    isDisabled = false,
    confirmColor = "primary",
    children,
    confirmText = 'Confirm',
    className,
    cancelText = 'Cancel',
}) => {
    return (
        <Dialog
            PaperProps={{
                className: '!bg-slate-50 dark:!bg-slate-800 !text-slate-800 dark:!text-slate-50 ' + className,
            }}
            open={open} onClose={onClose} fullWidth maxWidth="sm">
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent className={className}>{children}</DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant='outlined' color="inherit">
                    {cancelText}
                </Button>
                {onConfirm && (
                    <Button disabled={isDisabled || isLoading} onClick={onConfirm} variant='contained' color={confirmColor}>
                        {isLoading ? "Loading" : confirmText}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default CustomDialog;
