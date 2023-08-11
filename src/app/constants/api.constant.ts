export const AUTH = {
    SIGNIN: 'auth/login',
    SIGNUP: 'members/register',
    FORGOT_PASSWORD: 'member/forgot-password',
    RESET_PASSWORD: 'member/reset-password',
    LOG_OUT: 'auth/logout',
    SEND_OTP: 'verify/send-otp',
    VERIFY_OTP: 'verify/verify-otp',
};
export const BRANCH = {
    GET_BRNACH_LIST: 'branches',
    GET_BRANCH_DETAILS: 'branch/details',
    GET_PRODUCT_LIST: 'products',
    GET_SUBSCRIPTIONS_PER_BRANCH: 'branch/member/subscription/sessions',
    GET_PTS_PER_BRANCH: 'branch/member/pt/sessions',
    GET_ALL_PT_SESSIONS_PER_BRANCH: 'branch/member/pt/allsessions',
    GET_MEMBER_SUBSCRIPTIONS: 'member/subscriptions',
};
export const BOOKING = {
    GET_MEMBER_BOOKINGS: 'member-bookings',
    GET_MEMBER_AVAILABLE_BOOKINGS: 'available-bookings',
    BOOK_SESSION: 'book',
    CANCEL_BOOKING: 'cancel-book',
    SUSPEND_SUBSCRIPTION: 'suspend-subscription',
    CANCEL_SUBSCRIPTION: 'cancel-subscription',
    REACTIVE_SUBSCRIPTION: 'reactivate-subscription',
    SESSION_RATING: 'class-session-ratings',
    BUY_SUBSCRIPTION: 'member/subscriptions/buy',
};
export const PROFILE = {
    GET_PROFILE: 'profile',
    UPDATE_PROFILE: 'update-profile',
    GET_NOTIFICATIONS: 'member/notifications',
    TERMS_CONDITIONS: 'terms-and-conditions',
    GET_INVOICES: 'member/payments',
    POLICY: 'policy',
    CHECK_COUPON: 'check-coupon',
};