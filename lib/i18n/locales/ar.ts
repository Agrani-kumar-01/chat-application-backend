import { I18n, ValidationKeys, ValidationMessages, Validations } from '@dto';

const validationKeys: ValidationKeys = Object.freeze({
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    countryCode: 'رمز الدولة',
    phone: 'الهاتف',
    emailToken: 'رمز البريد الإلكتروني',
    phoneToken: 'رمز الهاتف',
    password: 'كلمة المرور', // NOSONAR
    emailPattern: 'يجب أن يكون بريدًا إلكترونيًا صالحًا.',
    semanticPattern: 'يجب أن يكون إصدارًا صالحًا.',
    passwordPattern:
        'يجب أن تكون بين ثمانية وعشرة أحرف على الأقل، ويجب أن تحتوي على حرف كبير واحد، وحرف صغير واحد، ورقم واحد، ورمز خاص واحد.', // NOSONAR
    otpPattern: 'يجب أن يكون رمز OTP صالحًا.',
    countryCodePattern: 'يجب أن يكون رمز الدولة صالحًا.',
    phonePattern: 'يجب أن يكون الهاتف صالحًا.',
    timeIn24Hours: 'يجب أن يكون وقتًا صالحًا.',
    addressType: 'نوع العنوان',
    page: 'صفحة',
    perPage: 'لكل صفحة',
    oldPassword: 'كلمة المرور القديمة',
    newPassword: 'كلمة المرور الجديدة',
});

const validationMessages: ValidationMessages = Object.freeze({
    NOT_AVAILABLE: 'غير متوفر',
    VIEW: 'عرض',
    EDIT: 'تعديل',
    DELETE: 'حذف',
    REMOVE: 'إزالة',
    ACTIVATE: 'تفعيل',
    IN_ACTIVATE: 'تعطيل',
    HEALTH_CHECK: 'فحص الصحة',
    NOT_FOUND: 'المورد غير موجود.',
    GENERAL_ERROR: 'حدث خطأ ما.',
    INVALID_REQUEST: 'طلب غير صالح، فشل تحقق الطلب.',
    EMAIL_ALREADY_FOUND: 'عنوان البريد الإلكتروني موجود بالفعل.',
    PHONE_ALREADY_FOUND: 'الهاتف موجود بالفعل.',
    USER_NOT_FOUND: 'المستخدم غير موجود.',
    USER_NOT_FOUND_WITH_EMAIL: 'المستخدم غير موجود مع هذا البريد الإلكتروني.',
    USER_NOT_FOUND_WITH_PHONE: 'المستخدم غير موجود مع هذا الهاتف.',
    YOUR_ACCOUNT_SUSPENDED: 'حسابك معلق.',
    OTP_SENT: 'تم إرسال OTP بنجاح.',
    INVALID_OTP: 'OTP المقدمة غير صالحة.',
    INVALID_EMAIL_OTP: 'OTP البريد الإلكتروني المقدمة غير صالحة.',
    EMAIL_OTP_EXPIRED: 'OTP البريد الإلكتروني منتهية الصلاحية.',
    INVALID_PHONE_OTP: 'OTP الهاتف المقدمة غير صالحة.',
    PHONE_OTP_EXPIRED: 'OTP الهاتف منتهية الصلاحية.',
    OTP_VERIFIED: 'تم التحقق من OTP بنجاح.',
    EMAIL_NOT_VERIFIED: 'البريد الإلكتروني غير موثق.',
    PHONE_NOT_VERIFIED: 'الهاتف غير موثق.',
    EMAIL_PHONE_NOT_VERIFIED: 'لم يتم التحقق من البريد الإلكتروني أو الهاتف.',
    ACCOUNT_LOCKED: 'حسابك مقفل حتى {0}.',
    INVALID_LOGIN_CREDENTIALS: 'بيانات تسجيل الدخول غير صالحة، لديك {0} فرصة متبقية.',
    PASSWORD_MATCH_FAILURE: 'كلمة المرور الحالية غير صحيحة.',
    PASSWORD_CHANGE_SUCCESS: 'تم تغيير كلمة المرور بنجاح.',
    UNAUTHORIZED: 'وصول غير مصرح به.',
    SESSION_EXPIRED: 'انتهت الجلسة.',
    INVALID_SESSION: 'جلسة غير صالحة.',
    LOGOUT_SUCCESS: 'تم تسجيل الخروج بنجاح.',
    PHONE_CHANGE_SUCCESS: 'تم تغيير رقم الهاتف بنجاح.',
    EMAIL_CHANGE_SUCCESS: 'تم تغيير عنوان البريد الإلكتروني بنجاح.',
    PROFILE_UPDATE_SUCCESS: 'تم تحديث الملف الشخصي بنجاح.',
    TOKEN_UPDATE_SUCCESS: 'تم تحديث الرمز بنجاح.',
    ACCOUNT_DELETE_SUCCESS: 'تم حذف الحساب بنجاح.',
    OLD_PASSWORD_INCORRECT: 'كلمة المرور القديمة غير صحيحة.',
    LOGIN_SUCCESS: 'تم تسجيل الدخول بنجاح.',
    EMAIL_RESET_PASSWORD: 'تعليمات إعادة تعيين كلمة المرور',
    FORGOT_PASSWORD_MAIL_SUCCESS:
        'تم إرسال البريد الإلكتروني، يرجى اتباع التعليمات من البريد الإلكتروني لإعادة تعيين كلمة المرور.',
    INVALID_RESET_PASS_REQUEST: 'طلب إعادة تعيين كلمة المرور غير صالح.',
    USER_SUSPENSION_STATUS_UPDATED: 'تم تحديث حالة تعليق المستخدم بنجاح.',
    USER_DELETE_SUCCESS: 'تم حذف المستخدم بنجاح.',
    GROUP_NOT_FOUND: 'لم يتم العثور على المجموعة.',
    GROUP_UPDATE_SUCCESS: 'تم تحديث المجموعة بنجاح.',
    GROUP_STATUS_UPDATED: 'تم تحديث حالة المجموعة بنجاح.',
    GROUP_DELETE_SUCCESS: 'تم حذف المجموعة بنجاح.',
    USER_UPDATE_SUCCESS: 'تم تحديث المستخدم بنجاح.',
    USER_STATUS_UPDATED: 'تم تحديث حالة المستخدم بنجاح.',
    USER_PASSWORD_UPDATED: 'تم تحديث كلمات مرور المستخدم بنجاح.',
    TEAM_NOT_FOUND: 'لم يتم العثور على الفريق.',
    TEAM_UPDATE_SUCCESS: 'تم تحديث الفريق بنجاح.',
    TEAM_DELETE_SUCCESS: 'تم حذف الفريق بنجاح.',
    TEAM_STATUS_UPDATED: 'تم تحديث حالة الفريق.',
    PERMISSION_UPDATED: 'تم تحديث الأذونات بنجاح.',
    INVALID_MFA_TOKEN: 'رمز MFA غير صالح.',
    COMPANY_SUBSCRIPTION_EXPIRED: 'انتهت اشتراك الشركة',
});

const formatKeyName = (keyName: string): string => validationKeys[keyName.replace(/\.\d+/, '')] ?? keyName;

const validations: Validations = {
    'any.required': ({ path }) => `${formatKeyName(path.join('.'))} مطلوب.`,
    'any.unknown': ({ path }) => `${formatKeyName(path.join('.'))} غير مسموح به.`,
    'any.invalid': ({ path }) => `${formatKeyName(path.join('.'))} يحتوي على قيمة غير صالحة.`,
    'any.empty': ({ path }) => `${formatKeyName(path.join('.'))} مطلوب.`,
    'any.allowOnly': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} يجب أن يكون واحدًا من ${context?.valids?.map((item: string) => formatKeyName(item)).join(', ')}`,
    'string.base': ({ path }) => `${formatKeyName(path.join('.'))} يجب أن يكون نصًا.`,
    'string.min': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} يجب أن يكون طوله على الأقل ${context?.limit} حرفًا.`,
    'string.max': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} يجب أن يكون طوله أقل من أو يساوي ${context?.limit} حرفًا.`,
    'string.hex': ({ path }) => `${formatKeyName(path.join('.'))} يجب أن يحتوي فقط على أحرف سداسية عشرية.`,
    'string.length': ({ path }) => `${formatKeyName(path.join('.'))} يجب أن يكون طوله 4 أحرف.`,
    'string.pattern.name': ({ path, context }) => `${formatKeyName(path.join('.'))} ${formatKeyName(context?.name)}`,
    'number.base': ({ path }) => `${formatKeyName(path.join('.'))} يجب أن يكون رقمًا.`,
    'number.min': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} يجب أن يكون أكبر من أو يساوي ${context?.limit}.`,
    'number.max': ({ context, path }) =>
        `${formatKeyName(path.join('.'))} يجب أن يكون أقل من أو يساوي ${context?.limit}.`,
    'number.integer': ({ path }) => `${formatKeyName(path.join('.'))} يجب أن يكون عددًا صحيحًا.`,
    'objectId.isValid': ({ path }) => `${formatKeyName(path.join('.'))} يجب أن يكون معرف كائن صالح.`,
    'object.base': ({ path }) => `${formatKeyName(path.join('.'))} يجب أن يكون كائنًا.`,
    'object.xor': ({ context }) =>
        `يسمح فقط بواحد من ${context?.peers?.map((peer: string) => formatKeyName(peer)).join(', ')}.`,
    'object.with': ({ context }) => `${formatKeyName(context?.peer)} مطلوب مع ${formatKeyName(context?.main)}.`,
    'object.without': ({ context }) => `${formatKeyName(context?.peer)} يجب إزالته مع ${formatKeyName(context?.main)}.`,
    'object.and': ({ context }) =>
        `${context?.missing?.map((peer: string) => formatKeyName(peer)).join(', ')} مطلوب مع ${context?.present
            .map((peer: string) => formatKeyName(peer))
            .join(', ')}.`,
    'object.missing': ({ context }) =>
        `واحد من ${context?.peers?.map((peer: string) => formatKeyName(peer).toLowerCase()).join(', ')} مطلوب.`,
    'array.min': ({ path, context }) =>
        `${formatKeyName(path.join('.'))} يجب أن تحتوي على الأقل على ${context?.limit} عنصر.`,
    'array.max': ({ path, context }) =>
        `${formatKeyName(path.join('.'))} يجب أن تحتوي على الأكثر ${context?.limit} عنصر.`,
    'array.unique': ({ path }) => `${formatKeyName(path.join('.'))} يجب أن تحتوي على قيمة فريدة.`,
};

const i18n: I18n = {
    validationKeys,
    validationMessages,
    validations,
};

export default i18n;

