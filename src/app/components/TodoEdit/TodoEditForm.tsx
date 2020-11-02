import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ITodoItem } from '../../actions/TodoTypes';
import { Link } from 'react-router-dom';

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
        }
    });

    console.log("formik:" + values.title);
    //console.log(props.item.id);
    console.log(props.item.title);
    console.log(props.item.description);

    return (
        <form className="mb-3" onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={values.id} />
            <div className="form-group">
                <label >Title: </label>
                <input type="text" name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} className="form-control " />
                {touched.title && errors.title ? (<div className="alert alert-danger" role="alert">{errors.title}</div>) : null}
            </div>
            <div className="form-group">
                <label >Description: </label>
                <textarea value={values.description} onChange={handleChange} onBlur={handleBlur} name="description" className="form-control"  ></textarea>
                {touched.description && errors.description ? (<div className="alert alert-danger" role="alert">{errors.description}</div>) : null}
            </div>
            <div className="form-check my-4">
                <input type="checkbox" checked={values.completed} onChange={handleChange} name="completed" className="form-check-input" />
                <label className="form-check-label" >Check for Complete</label>
            </div>
            <div className="input-group-append">
                <button type="submit" className="btn btn-outline-warning btn-lg mx-1" >Edit</button>
                <button className="btn btn-outline-dark btn-lg mx-1" ><Link to={`/todos/`}>Go Back</Link></button>            </div>
        </form >
    );
}



