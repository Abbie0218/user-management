import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

    type TextFieldProps = {
        borderColor?: string;
    };

    const outlinedSelectors = [
        '& .MuiOutlinedInput-notchedOutline',
        '&:hover .MuiOutlinedInput-notchedOutline',
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline',
    ];

    const options = {
        shouldForwardProp: (prop: any) => prop !== 'borderColor',
    };

    export const TextField = styled(
        MuiTextField,
        options,
    )<TextFieldProps>(({ borderColor }) => ({
        '& label.Mui-focused': {
            color: 'black',
        },
        [outlinedSelectors.join(',')]: {
            borderWidth: 1,
            borderColor,
        },
    }));

   
