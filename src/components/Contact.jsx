import React from 'react';

function Contact() {
	return (
		<div className="py-3">
			<form>
				<div class="mb-3">
					<label for="name" class="form-label">
						Name
					</label>
					<input type="text" class="form-control" id="name" />
				</div>
				<div class="mb-3">
					<label for="email" class="form-label">
						Email address
					</label>
					<input type="email" class="form-control" id="email" />
				</div>
				<div class="mb-3">
					<label for="message" class="form-label">
						Message
					</label>
					<textarea class="form-control" aria-label="message"></textarea>
				</div>

				<button type="submit" class="btn btn-outline-primary">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact;
