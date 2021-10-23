import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';

function Contact() {
	const { control, handleSubmit } = useForm();
	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	}

	return (
		<div className="py-3">
			<form
				data-netlify="true"
				method="post"
				onSubmit={handleSubmit((data) => {
					fetch('/', {
						method: 'POST',
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
						body: encode({
							'form-name': 'contact',
							...data,
						}),
					})
						.then(() =>
							toast.success('Your form has been successfully submitted')
						)
						.catch((error) => {
							console.log(error);
							toast.error('An error has occured, please try again');
						});
				})}
			>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<Controller
						render={({ field, fieldState: { error } }) => (
							<>
								<input
									{...field}
									type="text"
									className={error ? 'form-control is-invalid' : 'form-control'}
									id="name"
								/>
								<div className="invalid-feedback">
									{error?.message ?? 'please check if your input is correct'}
								</div>
							</>
						)}
						name="name"
						rules={{ required: 'This is a required field' }}
						control={control}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<Controller
						render={({ field, fieldState: { error } }) => (
							<>
								<input
									{...field}
									type="email"
									className={error ? 'form-control is-invalid' : 'form-control'}
									id="email"
								/>
								<div className="invalid-feedback">
									{error?.message ?? 'please check if your input is correct'}
								</div>
							</>
						)}
						name="email"
						rules={{
							required: 'This is a required field',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'invalid email address',
							},
						}}
						control={control}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="message" className="form-label">
						Message
					</label>
					<Controller
						render={({ field, fieldState: { error } }) => (
							<>
								<textarea
									{...field}
									className={error ? 'form-control is-invalid' : 'form-control'}
									aria-label="message"
								></textarea>
								<div className="invalid-feedback">
									{error?.message ?? 'please check if your input is correct'}
								</div>
							</>
						)}
						name="message"
						rules={{ required: 'This is a required field' }}
						control={control}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<div
				class="toast align-items-center text-white bg-primary border-0"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="d-flex">
					<div class="toast-body">Hello, world! This is a toast message.</div>
					<button
						type="button"
						class="btn-close btn-close-white me-2 m-auto"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
