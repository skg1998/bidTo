export default {
    host: process.env.RABBITMQ_HOST || 'localhost',
    queue: process.env.RABBITMQ_QUEUE || 'notificationQueue'
}