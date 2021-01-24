# photos-service
# HomeStay-Hotline

Welcome to HomeStay-Hotline! HomeStay-Hotline is an accomadation booking service using service oriented architecture(SOA), and this project is for the photos carousel module in the application. During this project I was working with a legacy front end and back end. The backend was was working but had not been built with scaling to accomodate lots of requests in mind. My main goal was to rebuild the backend and deploy this service to AWS in such a way that it could handle more traffic and spikes in traffic.
## Related Projects

  - [HomeStay-Hotline Photos Module](https://github.com/HomeStay-Hotline/photos-service)
  - [HomeStay-Hotline Info Module](https://github.com/HomeStay-Hotline/info-service)
  - [HomeStay-Hotline Carousel Module](https://github.com/HomeStay-Hotline/carousel) 
  - [HomeStay-Hotline Reviews Module](https://github.com/HomeStay-Hotline/reviews-service)

## Table of Contents

1. [Database](#database)
1. [Server Optimization and Scaling the Architecture](#server-optimization-and-scaling-the-architecture)
1. [Result](#result)

## Database

I wanted to ensure that the database being used in the legacy code would be able to handle stress while storing real world data sets and that it was the optimal choice. The legacy code was using PostgreSQL. I chose to test a NoSQL database as well and decided on using ArangoDB to compare. I seeded each database with 10 million primary records, optimized for the required queries and tested speeds for both. ArangoDB was ~1.5 times faster and after researching the pros and cons of each database I decided to go with ArangoDB for this service.

I then refactored the backend of the service to use ArangoDB.

## Server Optimization and Scaling the Architecture

![Server Architecture](https://github.com/The-10-000-RPS-Club/relatedItems-chris/blob/master/Server_Architecture.png)

I deployed the service to AWS, with the database on 1 EC2 instance and the service on another. I benchmarked the single service server using Loader.io at 375 requests per second (RPS) with a 0.0% error rate and an average response time of 131 ms.

I added another instance and setup NGINX as a load balancer on it. I then used Docker to containerize the service so that I could horizontally scale in less time. I added another service instance and stress tested again, with it being able to handle an additional load as expected. I added two more instances, bringing the total to four and expecting the throughput to go from 900 to 1200 RPS, but it did not. I analyzed the data I was recieving from Loader.io. I looked at the error log in the instance running NGINX and saw that there were errors with the worker connections. I changed the worker connections allowed in the conf file and was able to increase the throughput up to 1200 RPS. 

I added another instance, bringing the total to five instances. It was able to handle the 1500 RPS until the end of the test, where it would start to recieve errors. I added another instance, expecting to see six instances be able to handle 1500 RPS but it was doing the same thing. I thought that it must be something to do with the load balancer as the service instances should be able to handle that load and the database instance was able to handle it smoothly for the majority of the test. I increased the size of the instance running NGINX and was able to handle a throughput of 2500 RPS with no issues.

## Result

Working with a legacy codebase I rebuilt the backend and deployed to Amazon Web Services. I improved throughput by ~650% by horizontally scaling the service to handle ~2,500 requests per second with 0.0% error rate and an average response time of 95 ms.
