import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export type IAddTodoTask = (title: string, description: string, complete: boolean) => void;

interface TodoAddProps {
    addTodoTask: IAddTodoTask;
}

function TodoAdd(props: TodoAddProps) {
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            title: '',
            description: '',
            completed: false
        },
        validationSchema: Yup.object({
            title: Yup.string().min(6, 'Must be longer then 6 characters ').required('Title is required'),
            description: Yup.string().min(6, 'Must be longer then 6 characters ').required('Title is required')

        }),
        onSubmit: ({ title, description, completed }) => {
            props.addTodoTask(title, description, completed)
        }
    });
    return (
        <form className="mb-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <label >Title: </label>
                <input value={values.title} onChange={handleChange} onBlur={handleBlur} type="text" name="title" className="form-control " placeholder="Enter text here..." autoComplete="off" />
                {touched.title && errors.title ? (<div className="alert alert-danger" role="alert">{errors.title}</div>) : null}
            </div>
            <div className="form-group">
                <label >Description: </label>
                <textarea value={values.description} onChange={handleChange} onBlur={handleBlur} name="description" className="form-control" placeholder="Enter text here..." autoComplete="off" ></textarea>
                {touched.description && errors.description ? (<div className="alert alert-danger" role="alert">{errors.description}</div>) : null}
            </div>
            <div className="form-check">
                <input type="checkbox" checked={values.completed} onChange={handleChange} name="completed" className="form-check-input" />
                <label className="form-check-label" >Check for Complete</label>
            </div>
            <div className="input-group-append float-right my-4">
                <button type="submit" className="btn btn-outline-success btn-lg">Add</button>
            </div>
        </form >
    );
}

export default TodoAdd;
