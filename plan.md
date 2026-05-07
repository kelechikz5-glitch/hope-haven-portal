
## Plan for NGO Website Development

**I. Project Overview:**
Develop a new, attractive, and functional NGO website for Hamilton Foundation. The website will feature a public-facing interface with content pages and user interaction elements, alongside a comprehensive admin portal for content management and user engagement.

**II. Frontend Development (Assigned to: frontend_engineer):**
*   **Objective:** Create a visually appealing and user-friendly interface based on the provided design principles and user request.
*   **Key Pages & Features:**
    *   **Home Page:**
        *   Showcase NGO activities.
        *   Implement a picture slideshow/carousel.
        *   Attractive design elements.
    *   **About Page:**
        *   Content detailing the Hamilton Foundation's mission, history, and values.
    *   **Get Involved Page:**
        *   Forms for partners and volunteers to sign up.
        *   Clear calls to action.
    *   **Donate Page:**
        *   Display NGO's email, phone number, and bank details.
*   **Design Principles:** "Very good looking and attractive". Ensure responsive design for various devices.
*   **Mandatory Initial Step:** Execute `generate_images_bulk` before writing any code files.

**III. Backend Development (Assigned to: supabase_engineer):**
*   **Objective:** Build a robust backend infrastructure to manage website content, user data, and provide administrative capabilities.
*   **Key Features & Components:**
    *   **Database Design:**
        *   Tables for user profiles (partners, volunteers) including contact information.
        *   Tables for posts (text, images, videos).
        *   Table for analytics data.
    *   **Admin Portal Functionalities:**
        *   **Content Management:** Create, read, update, and delete posts (images, videos).
        *   **User Management:**
            *   View and manage profiles of registered partners and volunteers.
            *   Implement communication features (messaging system) between admin and users.
        *   **Analytics Dashboard:**
            *   Display statistics on website activities (e.g., user sign-ups, donations, post engagement).
            *   Provide insights into NGO activities.
    *   **API Development:** Create APIs to serve data to the frontend and handle user/admin interactions.
    *   **Security:** Implement authentication and authorization for admin access and user accounts.
    *   **Control Mechanism:** Ensure backend has full control over frontend content and user interactions as requested.
*   **Technology Stack:** Supabase (Database, Authentication, potentially Edge Functions for custom logic).

**IV. Workflow:**
1.  `Architect` creates this plan using `create_plan`.
2.  `Architect` transfers the task to `frontend_engineer` to begin UI development, enforcing `generate_images_bulk` first.
3.  `supabase_engineer` will be engaged subsequently for backend development based on the plan.
4.  `Architect` will use `validate_build` upon completion of all tasks.
