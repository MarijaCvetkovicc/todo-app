import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Checkbox, FormControlLabel, Grid, MenuItem, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom';
import { priorities } from '../../util/constants';
import { ITodoItem } from '../../redux/actions/TodoTypes';
import { setColor } from '../../util/helpers';

export type ISaveTodoTask = (task: ITask) => void;
export interface ITask {
    title: string,
    description: string,
    priority: string,
    completed: boolean,
    start: string,
    end: string,
    backgroundColor: string
}
interface TodoAddProps {
    item: ITodoItem,
    saveTodoTask: ISaveTodoTask;
}
function TodoForm(props: TodoAddProps) {
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            id: props.item.id,
            title: props.item.title,
            description: props.item.description,
            completed: props.item.completed,
            priority: props.item.priority,
            start: props.item.start,
            end: props.item.end,

        },
        validationSchema: Yup.object({
            title: Yup.string().min(4, 'Must be longer then 4 characters ').max(17, 'Must be shorter then 17 characters ').required('Title is required'),
            description: Yup.string().min(4, 'Must be longer then 4 characters ').required('Title is required'),
            fromDate: Yup.date(),
            toDate: Yup.date().min(Yup.ref('fromDate'), "End date can't be before Start date"),
        }),
        onSubmit: ({ title, description, completed, priority, start, end }) => {
            let task = {
                title: title,
                description: description,
                priority: priority,
                completed: completed,
                start: start,
                end: end,
                backgroundColor: setColor(priority)
            }
            props.saveTodoTask(task)
        },
        enableReinitialize: true
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
                        fullWidth
                        onBlur={handleBlur}
                        error={touched.title && Boolean(errors.title)}
                        helperText={touched.title && Boolean(errors.title) ? (errors.title) : ("Title of the task.")} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        multiline={true}
                        value={values.description}
                        onChange={handleChange}
                        label="Task description"
                        name="description"
                        autoComplete="off"
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
                    <Grid item xs={6} sm={6}>
                        <TextField
                            value={values.start}
                            onChange={handleChange}
                            label="Start Date"
                            name="start"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={touched.start && Boolean(errors.start)}
                            helperText={touched.start && Boolean(errors.start) ? (errors.start) : ("Time and Date when task starts.")}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            value={values.end}
                            onChange={handleChange}
                            label="End Date"
                            name="end"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={touched.end && Boolean(errors.end)}
                            helperText={touched.end && Boolean(errors.end) ? (errors.end) : ("Time and Date when task finishs.")}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Priority"
                        value={values.priority}
                        onChange={handleChange}
                        name="priority"
                        fullWidth
                        helperText="Choose priority.">
                        {priorities.map((priority) => (
                            <MenuItem key={priority.value} value={priority.value}>
                                {priority.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid container item spacing={3} direction="row">
                    <Box p={2} >
                        <Button variant="contained" type="submit" color="primary" startIcon={<SaveIcon />}>
                            {Number(props.item.id) === -1 ? 'Add' : 'Save'}
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
export default TodoForm;
