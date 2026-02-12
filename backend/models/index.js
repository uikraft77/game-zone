// User Model Schema Structure
const userSchema = {
  id: String,
  userType: String, // 'user' | 'astrologer' | 'admin'
  username: String,
  email: String,
  phone: String,
  password: String, // hashed
  profileImage: String,
  isVerified: Boolean,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date,
  lastLogin: Date,
};

// User (Regular Player) Model
const regularUserSchema = {
  ...userSchema,
  userType: 'user',
  subscriptions: [
    {
      astrologerId: String,
      planDays: Number,
      subscriptionDate: Date,
      expiryDate: Date,
      status: String, // 'active' | 'expired'
      price: Number,
    },
  ],
  dashboard: {
    todayResults: [
      {
        time: String,
        status: String,
        result: Number,
        box: String,
      },
    ],
    favoriteAstrologers: [String],
  },
  serviceHistory: [
    {
      astrologerId: String,
      astrologerName: String,
      type: String, // 'subscription' | 'chat' | 'call'
      startDate: Date,
      endDate: Date,
      profit: Number,
      loss: Number,
      feedback: {
        rating: Number,
        review: String,
      },
    },
  ],
};

// Astrologer Model
const astrologerSchema = {
  ...userSchema,
  userType: 'astrologer',
  experience: Number, // in years
  specialization: [String], // games they specialize in
  about: String,
  bio: String,
  verified: Boolean,
  rating: Number, // average rating
  totalRatings: Number,
  contactLinks: {
    telegram: String,
    facebook: String,
    whatsapp: String,
    youtube: String,
  },
  subscriptionPlans: [
    {
      days: Number,
      price: Number,
    },
  ],
  dailyPostsLimit: Number,
  monthlyStats: {
    totalCards: Number,
    passedCards: Number,
    failedCards: Number,
    accuracy: Number,
    ranking: Number,
  },
  cards: [
    {
      id: String,
      gameTime: String,
      numbers: [Number],
      visibility: String, // 'public' | 'pro_users'
      createdAt: Date,
      result: Number,
      status: String, // 'pending' | 'passed' | 'failed'
    },
  ],
  earnings: {
    totalEarnings: Number,
    monthlyEarnings: Number,
    weeklyEarnings: Number,
    pendingWithdrawal: Number,
  },
};

// Admin Model
const adminSchema = {
  ...userSchema,
  userType: 'admin',
  permissions: [String],
  adminLevel: String, // 'super' | 'moderator'
};

// Game Result Model
const gameResultSchema = {
  id: String,
  date: Date,
  time: String,
  box: String,
  winningNumber: Number,
  announcedBy: String, // admin id
  announcedAt: Date,
};

// Subscription Model
const subscriptionSchema = {
  id: String,
  userId: String,
  astrologerId: String,
  planDays: Number,
  price: Number,
  startDate: Date,
  expiryDate: Date,
  status: String, // 'active' | 'expired' | 'cancelled'
  paymentId: String,
  createdAt: Date,
};

// Payment Model
const paymentSchema = {
  id: String,
  userId: String,
  orderId: String,
  amount: Number,
  currency: String,
  paymentMethod: String,
  status: String, // 'pending' | 'completed' | 'failed'
  transactionId: String,
  razorpayPaymentId: String,
  createdAt: Date,
  updatedAt: Date,
};

// Feedback/Rating Model
const feedbackSchema = {
  id: String,
  fromUserId: String,
  toAstrologerId: String,
  rating: Number, // 1-5
  review: String,
  serviceProfit: Number,
  createdAt: Date,
};

module.exports = {
  userSchema,
  regularUserSchema,
  astrologerSchema,
  adminSchema,
  gameResultSchema,
  subscriptionSchema,
  paymentSchema,
  feedbackSchema,
};
