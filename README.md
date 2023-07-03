## Project Idea: Task Manager

### Description

Create a task manager application that allows users to create, update, and manage their tasks. The application will have the following features:

1. **Task creation**: Users can add new tasks with a title, description, and due date.
2. **Task list**: Display a list of all tasks, sorted by their due dates. Include options to filter tasks based on their completion status (completed/incomplete).
3. **Task details**: Users can click on a task to view its details, including the title, description, due date, and completion status.
4. **Task update**: Allow users to update the details of a task, such as changing the title, description, due date, or marking it as completed.
5. **Task deletion**: Provide an option to delete a task from the list.
6. **Offline functionality**: Implement offline support using Next.js and Service Worker API, so users can access and interact with their tasks even when they are not connected to the internet.
7. **Push notifications**: Utilize the Push API to send push notifications to users for upcoming or overdue tasks.
8. **Responsive design**: Ensure the application is responsive and works well on different devices, including mobile phones and tablets.

By using Next.js, you can take advantage of its server-side rendering capabilities for initial page load performance, and then progressively enhance the app with PWA features such as offline support and push notifications.

Remember to follow best practices for building PWAs, such as using a service worker, caching assets, and providing a manifest file for the app's installation on the user's device.

Have fun building your task manager PWA with Next.js!

### Color palette

#### Here's a proposed color palette for `light mode`:

1. Soft Blue: `#AEDFF7` - This can be used as the primary color, it's calming and promotes focus.
2. Light Green: `#C1E1C5` - This can be used for accents and to highlight important tasks.
3. Soft Grey: `#E2E2E2` - This can be used for backgrounds or secondary elements.
4. Dark Blue: `#17202A` - This can be used for text and important elements.
5. Light Yellow: `#FDFD96` - This can be used for notifications or important highlights.
6. Black: `#000000` - This can be used for text color on highlighted elements.

#### For `dark mode`, we'll use darker shades of the same colors to maintain consistency:

1. Dark Blue: `#17202A` - This can be used as the primary color.
2. Dark Green: `#196F3D` - This can be used for accents and to highlight important tasks.
3. Dark Grey: `#424949` - This can be used for backgrounds or secondary elements.
4. Soft Blue: `#AEDFF7` - This can be used for text and important elements.
5. Dark Yellow: `#F1C40F` - This can be used for notifications or important highlights.
6. Black: `#000000` - This can be used for text color on highlighted elements.
