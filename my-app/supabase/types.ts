export type UserRole = 'student' | 'teacher' | 'admin' | 'parent';
export type EnrollmentStatus = 'active' | 'completed' | 'dropped' | 'paused';
export type LessonStatus = 'not_started' | 'in_progress' | 'completed';
export type ContentType = 'video' | 'text' | 'quiz' | 'exercise' | 'document' | 'live_session';
export type QuizStatus = 'in_progress' | 'completed' | 'abandoned';
export type SessionStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
export type AttendanceStatus = 'registered' | 'attended' | 'absent';
export type MessageType = 'private' | 'announcement' | 'notification';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type RelationshipType = 'father' | 'mother' | 'guardian';
export type PointTransactionType = 'purchase' | 'consumption' | 'refund';
export type AccessType = 'subscription' | 'points' | 'free';
export type SubscriptionStatus = 'active' | 'cancelled' | 'expired';
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];


export interface Database {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: UserInsert;
        Update: UserUpdate;
      };
      user_sessions: {
        Row: UserSession;
        Insert: UserSessionInsert;
        Update: UserSessionUpdate;
      };
      student_profiles: {
        Row: StudentProfile;
        Insert: StudentProfileInsert;
        Update: StudentProfileUpdate;
      };
      teacher_profiles: {
        Row: TeacherProfile;
        Insert: TeacherProfileInsert;
        Update: TeacherProfileUpdate;
      };
      parent_student_relations: {
        Row: ParentStudentRelation;
        Insert: ParentStudentRelationInsert;
        Update: ParentStudentRelationUpdate;
      };
      
      subjects: {
        Row: Subject;
        Insert: SubjectInsert;
        Update: SubjectUpdate;
      };
      courses: {
        Row: Course;
        Insert: CourseInsert;
        Update: CourseUpdate;
      };
      course_modules: {
        Row: CourseModule;
        Insert: CourseModuleInsert;
        Update: CourseModuleUpdate;
      };
      lessons: {
        Row: Lesson;
        Insert: LessonInsert;
        Update: LessonUpdate;
      };
      
      enrollments: {
        Row: Enrollment;
        Insert: EnrollmentInsert;
        Update: EnrollmentUpdate;
      };
      lesson_progress: {
        Row: LessonProgress;
        Insert: LessonProgressInsert;
        Update: LessonProgressUpdate;
      };
      
      subscription_plans: {
        Row: SubscriptionPlan;
        Insert: SubscriptionPlanInsert;
        Update: SubscriptionPlanUpdate;
      };
      user_subscriptions: {
        Row: UserSubscription;
        Insert: UserSubscriptionInsert;
        Update: UserSubscriptionUpdate;
      };
      
      point_packs: {
        Row: PointPack;
        Insert: PointPackInsert;
        Update: PointPackUpdate;
      };
      user_points: {
        Row: UserPoints;
        Insert: UserPointsInsert;
        Update: UserPointsUpdate;
      };
      point_purchases: {
        Row: PointPurchase;
        Insert: PointPurchaseInsert;
        Update: PointPurchaseUpdate;
      };
      point_transactions: {
        Row: PointTransaction;
        Insert: PointTransactionInsert;
        Update: PointTransactionUpdate;
      };
      
      payments: {
        Row: Payment;
        Insert: PaymentInsert;
        Update: PaymentUpdate;
      };
      
      quizzes: {
        Row: Quiz;
        Insert: QuizInsert;
        Update: QuizUpdate;
      };
      quiz_attempts: {
        Row: QuizAttempt;
        Insert: QuizAttemptInsert;
        Update: QuizAttemptUpdate;
      };
      quiz_responses: {
        Row: QuizResponse;
        Insert: QuizResponseInsert;
        Update: QuizResponseUpdate;
      };
      
      live_sessions: {
        Row: LiveSession;
        Insert: LiveSessionInsert;
        Update: LiveSessionUpdate;
      };
      session_attendance: {
        Row: SessionAttendance;
        Insert: SessionAttendanceInsert;
        Update: SessionAttendanceUpdate;
      };
      
      messages: {
        Row: Message;
        Insert: MessageInsert;
        Update: MessageUpdate;
      };
      course_discussions: {
        Row: CourseDiscussion;
        Insert: CourseDiscussionInsert;
        Update: CourseDiscussionUpdate;
      };
      
      daily_user_stats: {
        Row: DailyUserStats;
        Insert: DailyUserStatsInsert;
        Update: DailyUserStatsUpdate;
      };
      course_analytics: {
        Row: CourseAnalytics;
        Insert: CourseAnalyticsInsert;
        Update: CourseAnalyticsUpdate;
      };
      platform_analytics: {
        Row: PlatformAnalytics;
        Insert: PlatformAnalyticsInsert;
        Update: PlatformAnalyticsUpdate;
      };
      
      system_settings: {
        Row: SystemSettings;
        Insert: SystemSettingsInsert;
        Update: SystemSettingsUpdate;
      };
      user_preferences: {
        Row: UserPreferences;
        Insert: UserPreferencesInsert;
        Update: UserPreferencesUpdate;
      };
      
      audit_logs: {
        Row: AuditLog;
        Insert: AuditLogInsert;
        Update: AuditLogUpdate;
      };
      error_logs: {
        Row: ErrorLog;
        Insert: ErrorLogInsert;
        Update: ErrorLogUpdate;
      };
    };
    Views: {
      active_enrollments: {
        Row: ActiveEnrollmentView;
      };
      course_statistics: {
        Row: CourseStatisticsView;
      };
      user_activity_summary: {
        Row: UserActivitySummaryView;
      };
      active_subscriptions: {
        Row: ActiveSubscriptionView;
      };
      user_points_balance: {
        Row: UserPointsBalanceView;
      };
    };
    Functions: {
      calculate_course_progress: {
        Args: { p_enrollment_id: string };
        Returns: number;
      };
      check_enrollment_eligibility: {
        Args: { p_student_id: string; p_course_id: string };
        Returns: boolean;
      };
      generate_slug: {
        Args: { input_text: string };
        Returns: string;
      };
    };
  };
}

export interface User {
  id: string;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  role?: UserRole;
  phone?: string;
  date_of_birth?: string;
  profile_image?: string;
  is_active?: boolean;
  email_verified?: boolean;
  email_verification_token?: string;
  password_reset_token?: string;
  password_reset_expires?: string;
  last_login?: string;
  login_attempts?: number;
  locked_until?: string;
  two_factor_secret?: string;
  two_factor_enabled?: boolean;
  preferences?: Record<string, any>;
  metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface UserInsert extends Omit<User, 'id' | 'created_at' | 'updated_at'> {
  id?: string;
  role?: UserRole;
  is_active?: boolean;
  email_verified?: boolean;
  login_attempts?: number;
  two_factor_enabled?: boolean;
  preferences?: Record<string, any>;
  metadata?: Record<string, any>;
}

export interface UserUpdate extends Partial<Omit<User, 'id' | 'created_at'>> {}

export interface UserSession {
  id: string;
  user_id: string;
  session_token: string;
  refresh_token?: string;
  device_info?: Record<string, any>;
  ip_address?: string;
  user_agent?: string;
  is_active: boolean;
  expires_at: string;
  created_at: string;
  last_used_at: string;
}

export interface UserSessionInsert extends Omit<UserSession, 'id' | 'created_at' | 'last_used_at'> {
  id?: string;
  device_info: Record<string, any>;
  is_active: boolean;
}

export interface UserSessionUpdate extends Partial<Omit<UserSession, 'id' | 'created_at'>> {}

export interface StudentProfile {
  id: string;
  user_id: string;
  student_id?: string;
  grade_level?: string;
  school_name?: string;
  parent_email?: string;
  emergency_contact?: string;
  emergency_phone?: string;
  learning_style?: string;
  special_needs?: string;
  academic_year?: string;
  learning_preferences?: Record<string, any>;
  performance_metrics?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface StudentProfileInsert extends Omit<StudentProfile, 'id' | 'created_at' | 'updated_at'> {
  id?: string;
  learning_preferences?: Record<string, any>;
  performance_metrics?: Record<string, any>;
}

export interface StudentProfileUpdate extends Partial<Omit<StudentProfile, 'id' | 'created_at'>> {}

export interface TeacherProfile {
  id: string;
  user_id: string;
  teacher_id?: string;
  specialization?: string;
  qualifications?: string;
  experience_years: number;
  bio?: string;
  rating: number;
  total_reviews: number;
  teaching_languages: string[];
  certifications: any[];
  availability: Record<string, any>;
  hourly_rate?: number;
  created_at: string;
  updated_at: string;
}

export interface TeacherProfileInsert extends Omit<TeacherProfile, 'id' | 'created_at' | 'updated_at'> {
  id?: string;
  experience_years: number;
  rating: number;
  total_reviews: number;
  teaching_languages: string[];
  certifications: any[];
  availability: Record<string, any>;
}

export interface TeacherProfileUpdate extends Partial<Omit<TeacherProfile, 'id' | 'created_at'>> {}

export interface ParentStudentRelation {
  id: string;
  parent_id: string;
  student_id: string;
  relationship_type: RelationshipType;
  is_primary_contact: boolean;
  can_view_grades: boolean;
  can_receive_notifications: boolean;
  created_at: string;
}

export interface ParentStudentRelationInsert extends Omit<ParentStudentRelation, 'id' | 'created_at'> {
  id: string;
  is_primary_contact: boolean;
  can_view_grades: boolean;
  can_receive_notifications: boolean;
}

export interface ParentStudentRelationUpdate extends Partial<Omit<ParentStudentRelation, 'id' | 'created_at'>> {}

export interface Subject {
  id: string;
  name: string;
  description?: string;
  color_code: string;
  icon: string;
  is_active: boolean;
  sort_order: number;
  parent_subject_id?: string;
  metadata: Record<string, any>;
  created_at: string;
}

export interface SubjectInsert extends Omit<Subject, 'id' | 'created_at'> {
  id?: string;
  color_code: string;
  icon: string;
  is_active: boolean;
  sort_order: number;
  metadata: Record<string, any>;
}

export interface SubjectUpdate extends Partial<Omit<Subject, 'id' | 'created_at'>> {}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description?: string;
  short_description?: string;
  subject_id: string;
  teacher_id: string;
  grade_level?: string;
  difficulty_level: DifficultyLevel;
  duration_hours?: number;
  estimated_completion_days?: number;
  point_cost: number;
  is_published: boolean;
  is_featured: boolean;
  is_free: boolean;
  max_enrollments?: number;
  thumbnail?: string;
  trailer_video_url?: string;
  learning_objectives: any[];
  prerequisites: any[];
  course_content: Record<string, any>;
  resources: any[];
  faq: any[];
  meta_title?: string;
  meta_description?: string;
  keywords?: string[];
  total_enrollments: number;
  total_completions: number;
  average_rating: number;
  total_reviews: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface CourseInsert extends Omit<Course, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  difficulty_level: DifficultyLevel;
  point_cost: number;
  is_published: boolean;
  is_featured: boolean;
  is_free: boolean;
  learning_objectives: any[];
  prerequisites: any[];
  course_content: Record<string, any>;
  resources: any[];
  faq: any[];
  total_enrollments: number;
  total_completions: number;
  average_rating: number;
  total_reviews: number;
}

export interface CourseUpdate extends Partial<Omit<Course, 'id' | 'created_at'>> {}

export interface CourseModule {
  id: string;
  course_id: string;
  title: string;
  description?: string;
  order_index: number;
  duration_minutes: number;
  is_active: boolean;
  is_free_preview: boolean;
  module_content: Record<string, any>;
  created_at: string;
}

export interface CourseModuleInsert extends Omit<CourseModule, 'id' | 'created_at'> {
  id: string;
  duration_minutes: number;
  is_active: boolean;
  is_free_preview: boolean;
  module_content: Record<string, any>;
}

export interface CourseModuleUpdate extends Partial<Omit<CourseModule, 'id' | 'created_at'>> {}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  description?: string;
  content_type: ContentType;
  order_index: number;
  duration_seconds: number;
  is_mandatory: boolean;
  is_free_preview: boolean;
  points: number;
  video_url?: string;
  video_thumbnail?: string;
  video_duration?: number;
  video_quality: Record<string, any>;
  content_data: Record<string, any>;
  attachments: any[];
  transcripts: Record<string, any>;
  captions: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface LessonInsert extends Omit<Lesson, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  duration_seconds: number;
  is_mandatory: boolean;
  is_free_preview: boolean;
  points: number;
  video_quality: Record<string, any>;
  content_data: Record<string, any>;
  attachments: any[];
  transcripts: Record<string, any>;
  captions: Record<string, any>;
}

export interface LessonUpdate extends Partial<Omit<Lesson, 'id' | 'created_at'>> {}

export interface Enrollment {
  id: string;
  student_id: string;
  course_id: string;
  enrollment_date: string;
  completion_date?: string;
  certificate_issued_date?: string;
  status: EnrollmentStatus;
  progress_percentage: number;
  total_points_earned: number;
  total_time_spent_seconds: number;
  last_accessed?: string;
  access_type: AccessType;
  modules_completed: number;
  lessons_completed: number;
  quizzes_passed: number;
  enrollment_source?: string;
  completion_certificate_url?: string;
  feedback: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface EnrollmentInsert extends Omit<Enrollment, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  enrollment_date: string;
  status: EnrollmentStatus;
  progress_percentage: number;
  total_points_earned: number;
  total_time_spent_seconds: number;
  access_type: AccessType;
  modules_completed: number;
  lessons_completed: number;
  quizzes_passed: number;
  feedback: Record<string, any>;
}

export interface EnrollmentUpdate extends Partial<Omit<Enrollment, 'id' | 'created_at'>> {}

export interface LessonProgress {
  id: string;
  student_id: string;
  lesson_id: string;
  enrollment_id: string;
  status: LessonStatus;
  completion_date?: string;
  watch_time_seconds: number;
  total_watch_sessions: number;
  last_position_seconds: number;
  watch_percentage: number;
  points_earned: number;
  attempts: number;
  notes?: string;
  bookmarks: any[];
  first_accessed?: string;
  last_accessed: string;
  interaction_data: Record<string, any>;
}

export interface LessonProgressInsert extends Omit<LessonProgress, 'id' | 'last_accessed'> {
  id: string;
  status: LessonStatus;
  watch_time_seconds: number;
  total_watch_sessions: number;
  last_position_seconds: number;
  watch_percentage: number;
  points_earned: number;
  attempts: number;
  bookmarks: any[];
  interaction_data: Record<string, any>;
}

export interface LessonProgressUpdate extends Partial<Omit<LessonProgress, 'id'>> {}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description?: string;
  monthly_price: number;
  benefits: any[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SubscriptionPlanInsert extends Omit<SubscriptionPlan, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  benefits: any[];
  is_active: boolean;
}

export interface SubscriptionPlanUpdate extends Partial<Omit<SubscriptionPlan, 'id' | 'created_at'>> {}

export interface UserSubscription {
  id: string;
  user_id: string;
  plan_id: string;
  start_date: string;
  end_date?: string;
  status: SubscriptionStatus;
  payment_id?: string;
  created_at: string;
  updated_at: string;
}

export interface UserSubscriptionInsert extends Omit<UserSubscription, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  start_date: string;
  status: SubscriptionStatus;
}

export interface UserSubscriptionUpdate extends Partial<Omit<UserSubscription, 'id' | 'created_at'>> {}

export interface PointPack {
  id: string;
  name: string;
  points: number;
  price: number;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PointPackInsert extends Omit<PointPack, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  is_active: boolean;
}

export interface PointPackUpdate extends Partial<Omit<PointPack, 'id' | 'created_at'>> {}

export interface UserPoints {
  user_id: string;
  balance: number;
  created_at: string;
  updated_at: string;
}

export interface UserPointsInsert extends Omit<UserPoints, 'created_at' | 'updated_at'> {
  balance: number;
}

export interface UserPointsUpdate extends Partial<Omit<UserPoints, 'user_id' | 'created_at'>> {}

export interface PointPurchase {
  id: string;
  user_id: string;
  pack_id: string;
  points: number;
  price: number;
  payment_id?: string;
  created_at: string;
}

export interface PointPurchaseInsert extends Omit<PointPurchase, 'id' | 'created_at'> {
  id?: string;
}

export interface PointPurchaseUpdate extends Partial<Omit<PointPurchase, 'id' | 'created_at'>> {}

export interface PointTransaction {
  id: string;
  user_id: string;
  points: number;
  type: PointTransactionType;
  related_id?: string;
  description?: string;
  created_at: string;
}

export interface PointTransactionInsert extends Omit<PointTransaction, 'id' | 'created_at'> {
  id?: string;
}

export interface PointTransactionUpdate extends Partial<Omit<PointTransaction, 'id' | 'created_at'>> {}

export interface Payment {
  id: string;
  user_id: string;
  amount: number;
  currency: string;
  payment_method: string;
  payment_status: string;
  transaction_id?: string;
  related_type?: string;
  related_id?: string;
  created_at: string;
  updated_at: string;
}

export interface PaymentInsert extends Omit<Payment, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  currency: string;
  payment_method: string;
  payment_status: string;
}

export interface PaymentUpdate extends Partial<Omit<Payment, 'id' | 'created_at'>> {}

export interface Quiz {
  id: string;
  lesson_id: string;
  title: string;
  description?: string;
  instructions?: string;
  time_limit_seconds?: number;
  max_attempts: number;
  passing_score_percentage: number;
  shuffle_questions: boolean;
  show_correct_answers: boolean;
  allow_review: boolean;
  questions: any[];
  quiz_settings: Record<string, any>;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface QuizInsert extends Omit<Quiz, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  max_attempts: number;
  passing_score_percentage: number;
  shuffle_questions: boolean;
  show_correct_answers: boolean;
  allow_review: boolean;
  questions: any[];
  quiz_settings: Record<string, any>;
  is_active: boolean;
}

export interface QuizUpdate extends Partial<Omit<Quiz, 'id' | 'created_at'>> {}

export interface QuizAttempt {
  id: string;
  student_id: string;
  quiz_id: string;
  enrollment_id: string;
  attempt_number: number;
  score: number;
  max_score: number;
  percentage: number;
  passed: boolean;
  status: QuizStatus;
  started_at: string;
  submitted_at?: string;
  time_spent_seconds: number;
  selected_answers: Record<string, any>;
  question_order: any[];
  attempt_data: Record<string, any>;
}

export interface QuizAttemptInsert extends Omit<QuizAttempt, 'id' | 'started_at'> {
  id: string;
  score: number;
  max_score: number;
  percentage: number;
  passed: boolean;
  status: QuizStatus;
  time_spent_seconds: number;
  selected_answers: Record<string, any>;
  question_order: any[];
  attempt_data: Record<string, any>;
}

export interface QuizAttemptUpdate extends Partial<Omit<QuizAttempt, 'id' | 'started_at'>> {}

export interface QuizResponse {
  id: string;
  quiz_attempt_id: string;
  question_id: string;
  question_text?: string;
  selected_answer?: any;
  correct_answer?: any;
  is_correct: boolean;
  points_earned: number;
  points_possible: number;
  response_time_seconds: number;
  created_at: string;
}

export interface QuizResponseInsert extends Omit<QuizResponse, 'id' | 'created_at'> {
  id: string;
  is_correct: boolean;
  points_earned: number;
  points_possible: number;
  response_time_seconds: number;
}

export interface QuizResponseUpdate extends Partial<Omit<QuizResponse, 'id' | 'created_at'>> {}

export interface LiveSession {
  id: string;
  course_id: string;
  teacher_id: string;
  title: string;
  description?: string;
  session_date: string;
  start_time: string;
  end_time: string;
  timezone: string;
  max_participants: number;
  registration_required: boolean;
  is_recorded: boolean;
  meeting_platform: string;
  meeting_url?: string;
  meeting_id?: string;
  meeting_password?: string;
  status: SessionStatus;
  recording_url?: string;
  recording_duration_seconds?: number;
  agenda: any[];
  materials: any[];
  session_notes?: string;
  actual_start_time?: string;
  actual_end_time?: string;
  peak_attendance: number;
  total_participants: number;
  created_at: string;
  updated_at: string;
}

export interface LiveSessionInsert extends Omit<LiveSession, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  timezone: string;
  max_participants: number;
  registration_required: boolean;
  is_recorded: boolean;
  meeting_platform: string;
  status: SessionStatus;
  agenda: any[];
  materials: any[];
  peak_attendance: number;
  total_participants: number;
}

export interface LiveSessionUpdate extends Partial<Omit<LiveSession, 'id' | 'created_at'>> {}

export interface SessionAttendance {
  id: string;
  session_id: string;
  student_id: string;
  registration_date: string;
  joined_at?: string;
  left_at?: string;
  duration_minutes: number;
  status: AttendanceStatus;
  questions_asked: number;
  chat_messages: number;
  polls_participated: number;
  engagement_score: number;
  connection_quality: Record<string, any>;
  device_info: Record<string, any>;
}

export interface SessionAttendanceInsert extends Omit<SessionAttendance, 'id' | 'registration_date'> {
  id: string;
  registration_date: string;
  duration_minutes: number;
  status: AttendanceStatus;
  questions_asked: number;
  chat_messages: number;
  polls_participated: number;
  engagement_score: number;
  connection_quality: Record<string, any>;
  device_info: Record<string, any>;
}

export interface SessionAttendanceUpdate extends Partial<Omit<SessionAttendance, 'id' | 'registration_date'>> {}

export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  subject?: string;
  body: string;
  message_type: MessageType;
  is_read: boolean;
  is_starred: boolean;
  is_archived: boolean;
  parent_message_id?: string;
  thread_id?: string;
  attachments: any[];
  message_data: Record<string, any>;
  priority: number;
  expires_at?: string;
  created_at: string;
  read_at?: string;
}

export interface MessageInsert extends Omit<Message, 'id' | 'created_at'> {
  id: string;
  message_type: MessageType;
  is_read: boolean;
  is_starred: boolean;
  is_archived: boolean;
  attachments: any[];
  message_data: Record<string, any>;
  priority: number;
}

export interface MessageUpdate extends Partial<Omit<Message, 'id' | 'created_at'>> {}

export interface CourseDiscussion {
  id: string;
  course_id: string;
  lesson_id?: string;
  user_id: string;
  title?: string;
  content: string;
  parent_id?: string;
  upvotes: number;
  downvotes: number;
  is_pinned: boolean;
  is_resolved: boolean;
  is_approved: boolean;
  moderated_by?: string;
  moderated_at?: string;
  created_at: string;
  updated_at: string;
}

export interface CourseDiscussionInsert extends Omit<CourseDiscussion, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  upvotes: number;
  downvotes: number;
  is_pinned: boolean;
  is_resolved: boolean;
  is_approved: boolean;
}

export interface CourseDiscussionUpdate extends Partial<Omit<CourseDiscussion, 'id' | 'created_at'>> {
    moderated_at?: string;
    updated_at?: string;
}

export interface CourseDiscussionDelete extends Pick<CourseDiscussion, 'id'> {
    deleted_at: string;
}

export interface DailyUserStats {
  id: string;
  user_id: string;
  date: string;
  login_count: number;
  total_time_minutes: number;
  lessons_accessed: number;
  lessons_completed: number;
  quizzes_taken: number;
  quizzes_passed: number;
  points_earned: number;
  videos_watched: number;
  video_watch_time_minutes: number;
  forum_posts: number;
  messages_sent: number;
  live_sessions_attended: number;
  average_quiz_score: number;
  streak_days: number;
  activity_breakdown: Json;
  last_activity_time: string | null;
}

export interface DailyUserStatsInsert extends Omit<DailyUserStats, 'id' | 'date'> {
  id: string;
  date: string;
}

export interface DailyUserStatsUpdate extends Partial<Omit<DailyUserStats, 'id' | 'date'>> {
    activity_breakdown?: Json;
    last_activity_time?: string | null;
}

export interface CourseAnalytics {
  id: string;
  course_id: string;
  date: string;
  new_enrollments: number;
  total_enrollments: number;
  active_students: number;
  completed_enrollments: number;
  dropped_enrollments: number;
  total_lesson_views: number;
  total_video_watch_time_hours: number;
  total_quiz_attempts: number;
  average_completion_rate: number;
  average_quiz_score: number;
  analytics_data: Json;
}

export interface CourseAnalyticsInsert extends Omit<CourseAnalytics, 'id' | 'date'> {
  id: string;
  date: string;
}

export interface CourseAnalyticsUpdate extends Partial<Omit<CourseAnalytics, 'id' | 'date'>> {
    analytics_data?: Json;
}

export interface PlatformAnalytics {
  id: string;
  date: string;
  total_users: number;
  new_registrations: number;
  active_users: number;
  verified_users: number;
  total_courses: number;
  published_courses: number;
  new_course_enrollments: number;
  course_completions: number;
  total_lessons: number;
  total_video_hours: number;
  total_quizzes: number;
  total_watch_time_hours: number;
  total_quiz_attempts: number;
  total_forum_posts: number;
  total_messages: number;
  live_sessions_conducted: number;
  total_revenue: number;
  metrics_breakdown: Json;
}

export interface PlatformAnalyticsInsert extends Omit<PlatformAnalytics, 'id' | 'date'> {
  id: string;
  date: string;
}

export interface PlatformAnalyticsUpdate extends Partial<Omit<PlatformAnalytics, 'id' | 'date'>> {
    metrics_breakdown?: Json;
}

export interface SystemSettings {
  id: string;
  category: string;
  setting_key: string;
  setting_value: string | null;
  setting_type: string;
  description: string | null;
  is_public: boolean;
  is_required: boolean;
  validation_rules: Json;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface SystemSettingsInsert extends Omit<SystemSettings, 'id' | 'created_at' | 'updated_at'> {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface SystemSettingsUpdate extends Partial<Omit<SystemSettings, 'id' | 'created_at'>> {
    is_public?: boolean;
    is_required?: boolean;
    validation_rules?: Json;
    updated_by?: string | null;
    updated_at?: string;
}

export interface UserPreferences {
  id: string;
  user_id: string;
  theme: string;
  language: string;
  timezone: string;
  email_notifications: boolean;
  push_notifications: boolean;
  sms_notifications: boolean;
  preferred_video_quality: string;
  autoplay_videos: boolean;
  playback_speed: number;
  subtitles_enabled: boolean;
  high_contrast: boolean;
  font_size: string;
  custom_preferences: Json;
  updated_at: string;
}

export interface UserPreferencesInsert extends Omit<UserPreferences, 'id' | 'updated_at'> {
  id: string;
  updated_at: string;
}

export interface UserPreferencesUpdate extends Partial<Omit<UserPreferences, 'id' | 'updated_at'>> {
    custom_preferences?: Json;
}

export interface AuditLog {
  id: string;
  user_id: string | null;
  action: string;
  table_name: string | null;
  record_id: string | null;
  old_values: Json | null;
  new_values: Json | null;
  ip_address: string | null;
  user_agent: string | null;
  session_id: string | null;
  created_at: string;
}

export interface AuditLogInsert extends Omit<AuditLog, 'id' | 'created_at'> {
  id: string;
  created_at: string;
}

export interface AuditLogUpdate extends Partial<Omit<AuditLog, 'id' | 'created_at'>> {
  old_values?: Json | null;
  new_values?: Json | null;
}

export interface ErrorLog {
  id: string;
  error_type: string;
  error_message: string;
  stack_trace: string | null;
  user_id: string | null;
  request_url: string | null;
  request_method: string | null;
  request_data: Json | null;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

export interface ErrorLogInsert extends Omit<ErrorLog, 'id' | 'created_at'> {
  id: string;
  created_at: string;
}

export interface ErrorLogUpdate extends Partial<Omit<ErrorLog, 'id' | 'created_at'>> {
  stack_trace?: string | null;
  request_data?: Json | null;
}

export interface ActiveEnrollmentView {
  enrollment_id: string;
  student_id: string;
  student_name: string;
  course_id: string;
  course_title: string;
  enrollment_date: string;
  progress_percentage: number;
  status: string;
  last_accessed: string | null;
}

export interface CourseStatisticsView {
  course_id: string;
  title: string;
  subject_id: string;
  subject_name: string;
  teacher_id: string;
  teacher_name: string;
  total_enrollments: number;
  total_completions: number;
  average_rating: number | null;
  total_reviews: number;
}

export interface UserActivitySummaryView {
  user_id: string;
  user_name: string;
  role: string;
  total_enrollments: number;
  lessons_completed: number;
  quizzes_taken: number;
  average_quiz_score: number | null;
  total_time_spent_minutes: number | null;
}

export interface ActiveSubscriptionView {
  id: string;
  user_name: string;
  plan_name: string;
  start_date: string;
  end_date: string | null;
  status: string;
}

export interface UserPointsBalanceView {
  user_id: string;
  user_name: string;
  balance: number;
}