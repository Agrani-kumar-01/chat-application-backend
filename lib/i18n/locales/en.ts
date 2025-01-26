import { I18n, ValidationKeys, ValidationMessages, Validations } from '@dto';

const validationKeys: ValidationKeys = Object.freeze({
    firstName: 'First name',
    lastName: 'Last name',
    fullName: 'Full name',
    email: 'Email',
    countryCode: 'Country code',
    phone: 'Phone',
    emailToken: 'Email token',
    phoneToken: 'Phone token',
    password: 'Password', // NOSONAR
    emailPattern: 'must be a valid email.',
    semanticPattern: 'must be a valid version.',
    passwordPattern:
        'should be minimum eight and maximum 10 characters long and must contain at least one uppercase letter, one lowercase letter, one number and one special character.', // NOSONAR
    otpPattern: 'must be a valid otp.',
    countryCodePattern: 'must be a valid country code.',
    phonePattern: 'must be a valid phone.',
    timeIn24Hours: 'must be a valid time.',
    addressType: 'Address type',
    page: 'Page',
    perPage: 'Per page',
    oldPassword: 'Old password',
    newPassword: 'New password',
});

const validationMessages: ValidationMessages = Object.freeze({
    NOT_AVAILABLE: 'N/A',
    VIEW: 'View',
    EDIT: 'Edit',
    DELETE: 'Delete',
    REMOVE: 'Remove',
    ACTIVATE: 'Activate',
    IN_ACTIVATE: 'In-activate',
    HEALTH_CHECK: 'Health check',
    NOT_FOUND: 'Resource not found.',
    GENERAL_ERROR: 'Something went wrong.',
    INVALID_REQUEST: 'Invalid request, request validation failed.',
    EMAIL_ALREADY_FOUND: 'Email address already exists.',
    PHONE_ALREADY_FOUND: 'Phone already exists.',
    USER_NOT_FOUND: 'User not found.',
    USER_NOT_FOUND_WITH_EMAIL: 'User not found with this email address.',
    USER_NOT_FOUND_WITH_PHONE: 'User not found with this phone.',
    YOUR_ACCOUNT_SUSPENDED: 'Your account is suspended.',
    OTP_SENT: 'OTP sent successfully.',
    INVALID_OTP: 'Invalid OTP provided.',
    INVALID_EMAIL_OTP: 'Invalid email OTP provided.',
    EMAIL_OTP_EXPIRED: 'Email OTP expired.',
    INVALID_PHONE_OTP: 'Invalid phone OTP provided.',
    PHONE_OTP_EXPIRED: 'Phone OTP expired.',
    OTP_VERIFIED: 'OTP verified successfully.',
    EMAIL_NOT_VERIFIED: 'Email not verified.',
    PHONE_NOT_VERIFIED: 'Phone not verified.',
    EMAIL_PHONE_NOT_VERIFIED: 'Email or phone not verified.',
    ACCOUNT_LOCKED: 'Your account is locked till {0}.',
    INVALID_LOGIN_CREDENTIALS: 'Invalid login credentials, you have {0} chances left.',
    PASSWORD_MATCH_FAILURE: 'Invalid current password.',
    PASSWORD_CHANGE_SUCCESS: 'Password changed successfully.',
    UNAUTHORIZED: 'Unauthorized access.',
    SESSION_EXPIRED: 'Session expired.',
    INVALID_SESSION: 'Invalid session.',
    LOGOUT_SUCCESS: 'Logged out successfully.',
    PHONE_CHANGE_SUCCESS: 'Phone number changed successfully.',
    EMAIL_CHANGE_SUCCESS: 'Email address changed successfully.',
    PROFILE_UPDATE_SUCCESS: 'Profile updated successfully.',
    TOKEN_UPDATE_SUCCESS: 'Token updated successfully.',
    ACCOUNT_DELETE_SUCCESS: 'Account deleted successfully.',
    OLD_PASSWORD_INCORRECT: 'Invalid old password.',
    LOGIN_SUCCESS: 'Login successful.',
    EMAIL_RESET_PASSWORD: 'Reset password instructions',
    FORGOT_PASSWORD_MAIL_SUCCESS: 'Email sent, please follow the instructions from the email to reset your password.',
    INVALID_RESET_PASS_REQUEST: 'Invalid password reset request.',
    USER_SUSPENSION_STATUS_UPDATED: 'User suspension status updated successfully.',
    USER_DELETE_SUCCESS: 'User deleted successfully.',
    GROUP_NOT_FOUND: 'Group not found.',
    GROUP_UPDATE_SUCCESS: 'Group updated successfully.',
    GROUP_STATUS_UPDATED: 'Group status updated successfully.',
    GROUP_DELETE_SUCCESS: 'Group deleted successfully.',
    USER_UPDATE_SUCCESS: 'User updated successfully.',
    USER_STATUS_UPDATED: 'User status updated successfully.',
    USER_PASSWORD_UPDATED: 'User Passwords Updated successfully.',
    TEAM_NOT_FOUND: 'Team not found.',
    TEAM_UPDATE_SUCCESS: 'Team updated successfully.',
    TEAM_DELETE_SUCCESS: 'Team deleted successfully.',
    TEAM_STATUS_UPDATED: 'Team status updated.',
    PERMISSION_UPDATED: 'Permissions updated successfully.',
    INVALID_MFA_TOKEN: 'Invalid MFA token.',
    COMPANY_SUBSCRIPTION_EXPIRED: 'Company subscription ended',
});

const formatKeyName = (keyName: string): string => validationKeys[keyName.replace(/\.\d+/, '')] ?? keyName;

const validations: Validations = {
    'any.required': ({ path }) => `${formatKeyName(path.join('.'))} is required.`,
    'any.unknown': ({ path }) => `${formatKeyName(path.join('.'))} is not allowed.`,
    'any.invalid': ({ path }) => `${formatKeyName(path.join('.'))} contains an invalid value.`,
    'any.empty': ({ path }) => `${formatKeyName(path.join('.'))} is required.`,
    'any.allowOnly': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} must be one of ${context?.valids?.map((item: string) => formatKeyName(item)).join(', ')}`,
    'string.base': ({ path }) => `${formatKeyName(path.join('.'))} must be a string`,
    'string.min': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} must be at least ${context?.limit} characters in length.`,
    'string.max': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} must be under ${context?.limit} characters in length.`,
    'string.hex': ({ path }) => `${formatKeyName(path.join('.'))} must only contain hexadecimal characters.`,
    'string.length': ({ path }) => `${formatKeyName(path.join('.'))} length must be 4 characters long.`,
    'string.pattern.name': ({ path, context }) => `${formatKeyName(path.join('.'))} ${formatKeyName(context?.name)}`,
    'number.base': ({ path }) => `${formatKeyName(path.join('.'))} must be a number`,
    'number.min': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} must be larger than or equal to ${context?.limit}.`,
    'number.max': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} must be less than or equal to ${context?.limit}.`,
    'number.integer': ({ path }) => `${formatKeyName(path.join('.'))} must be an integer number.`,
    'objectId.isValid': ({ path }) => `${formatKeyName(path.join('.'))} needs to be a valid objectId`,
    'object.base': ({ path }) => `${formatKeyName(path.join('.'))} must be an object`,
    'object.xor': ({ context }) =>
        `only one of ${context?.peers?.map((peer: string) => formatKeyName(peer)).join(', ')} is allowed.`,
    'object.with': ({ context }) => `${formatKeyName(context?.peer)} is required with ${formatKeyName(context?.main)}.`,
    'object.without': ({ context }) =>
        `${formatKeyName(context?.peer)} needs to be removed with ${formatKeyName(context?.main)}.`,
    'object.and': ({ context }) =>
        `${context?.missing?.map((peer: string) => formatKeyName(peer)).join(', ')} required with ${context?.present
            .map((peer: string) => formatKeyName(peer))
            .join(', ')}.`,
    'object.missing': ({ context }) =>
        `one of ${context?.peers?.map((peer: string) => formatKeyName(peer).toLowerCase()).join(', ')} is required.`,
    'array.min': ({ path, context }) =>
        `${formatKeyName(path.join('.'))} must contain at least ${context?.limit} items.`,
    'array.max': ({ path, context }) =>
        `${formatKeyName(path.join('.'))} must contain at most ${context?.limit} items.`,
    'array.unique': ({ path }) => `${formatKeyName(path.join('.'))} must contain a unique value.`,
};

const i18n: I18n = {
    validationKeys,
    validationMessages,
    validations,
};

export default i18n;
