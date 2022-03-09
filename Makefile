dev-build:
	docker build \
	-t my-portfolio-dev:1.0 \
	-f Dockerfile.dev .

staging-build:
	docker build \
	-t my-portfolio:1.0 \
	--build-arg YOTEFRESH_VIEW="https://yotefresh.centralus.cloudapp.azure.com/" \
	--build-arg YOTEFRESH_CODE="https://github.com/cyator/yotefresh-groceries.git" \
	--build-arg JKLAB_VIEW="https://jklab.centralus.cloudapp.azure.com/" \
	--build-arg JKLAB_CODE="https://github.com/cyator/jkuat-lab-scheduler.git" \
	--build-arg TREEGEN_VIEW="https://random-tree-generator.netlify.app" \
	--build-arg TREEGEN_CODE="https://github.com/cyator/random-tree-generator.git" \
	--build-arg LINKEDIN="https://www.linkedin.com/in/christian-yator" \
	--build-arg EMAIL="christianyator7@gmail.com" \
	.



