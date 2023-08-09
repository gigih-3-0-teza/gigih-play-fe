import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const FormComment = ({ onSubmit }) => (
    <>
        <h2 className="mb-2">Add Comment</h2>
        <Formik
            initialValues={{ username: '', comment: '' }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'Username required';
                } else if (
                    !/^[a-zA-Z0-9_]{3,20}$/.test(values.username)
                ) {
                    errors.username = 'Invalid username';
                }
                if (!values.comment) {
                    errors.comment = 'Comment required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                onSubmit(values);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="mb-2">
                        <Field type="text" name="username"
                            placeholder="Username ..."
                            className="w-full block py-2 px-3 rounded-lg border border-slate-600 bg-slate-700 text-slate-300 focus:outline-none focus:ring focus:ring-teal-400/75 focus:border-transparent"
                        />
                        <ErrorMessage name="username" component="div" className='text-red-500' />
                    </div>
                    <div className="mb-2">
                        <Field type="comment" name="comment"
                            placeholder="Comment ..."
                            className="w-full block py-2 px-3 rounded-lg border border-slate-600 bg-slate-700 text-slate-300 focus:outline-none focus:ring focus:ring-teal-400/75 focus:border-transparent"
                        />
                        <ErrorMessage name="comment" component="div" className='text-red-500' />
                    </div>
                    <button type="submit" disabled={isSubmitting} className='bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 focus:ring text-white px-3 py-2 rounded-lg flex shadow-xl'>
                        <ChatBubbleLeftRightIcon className="h-5 mr-1 my-auto" />
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </>
);

export default FormComment;