import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ITodoItem } from '../../redux/actions/TodoTypes';
import { Link } from 'react-router-dom';
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';


export type IEditTodoTask = (title: string, description: string, id: number, completed: boolean) => void;

interface TodoEditFormProps {
    item: ITodoItem,
    editTodoTask: IEditTodoTask,
}

export default function TodoEditForm(props: TodoEditFormProps) {

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            id: props.item.id,
            title: props.item.title,
            description: props.item.description,
            completed: props.item.completed
        },
        validationSchema: Yup.object({
            title: Yup.string().min(6, 'Must be longer then 6 characters ').required('Title is required'),
            description: Yup.string().min(10, 'Must be longer then 10 characters ').required('Title is required')

        }),
        onSubmit: ({ title, description, completed }) => {
            props.editTodoTask(title, description, props.item.id, completed)
        },
        enableReinitialize:true
    });

    return (
       
        <form onSubmit={handleSubmit}>
            <Grid item container spacing={3} direction="column">

                <Grid item xs={12} sm={12}>
                    <TextField
                        value={values.title}
                        onChange={handleChange}
                        label="Task title"
                        name="title"
                        autoComplete="off"
                        variant="outlined"
                        fullWidth
                        onBlur={handleBlur}
                        error={touched.title && Boolean(errors.title)}
                        helperText={touched.title && Boolean(errors.title) ? (errors.title) : ("Title of the task.")} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        multiline={true}
                        rows={3}
                        value={values.description}
                        onChange={handleChange}
                        label="Task description"
                        name="description"
                        autoComplete="off"
                        variant="outlined"
                        fullWidth
                        onBlur={handleBlur}
                        error={touched.description && Boolean(errors.description)}
                        helperText={touched.description && Boolean(errors.description) ? (errors.description) : ("Description of the task.")} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControlLabel
                        control={<Checkbox checked={values.completed} onChange={handleChange} name="completed" />}
                        label="Check for Complete"
                    />
                </Grid>
                <Grid container item spacing={3} direction="row">
                    <Box p={2} >
                        <Button variant="contained" type="submit" color="primary" startIcon={<SaveIcon />}>
                            Save
                    </Button>
                    </Box>
                    <Box p={2}>
                        <Link to="/">
                            <Button variant="contained">Cancel</Button>
                        </Link>
                    </Box>
                </Grid>

            </Grid >
        </form >
    );
}
