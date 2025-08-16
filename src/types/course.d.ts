export type Course = {
    id: number;
    title: string;
    image_url: string;
    slug: string;
    reviews_average: number;
    video_duration: number;
    enrollments_count: number;
    labels: [
        { en: string; ar: string; },
        { en: string; ar: string; },
        {
            en: string;
            ar: string;
        }
    ],
    tutor: {
        id: number;
        name: string;
    },
    learners: number;
    watching_hours: number;
    is_in_cart: boolean;
    is_in_favorites: boolean;
    is_purchased: boolean;
    is_in_user_subscription: boolean;
    enrollment: null;

};



