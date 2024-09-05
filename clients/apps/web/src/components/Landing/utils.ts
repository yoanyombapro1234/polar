import { Product, SubscriptionTierType } from '@polar-sh/sdk'

export const MOCKED_PRODUCTS: Partial<Product>[] = [
  {
    name: 'Follower',
    type: 'free',
    description: 'A simple way to follow my projects.',
    benefits: [
      {
        id: '123',
        description: 'Weekly Newsletter',
        type: 'articles',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
    ],
    created_at: new Date().toDateString(),
  },
  {
    name: 'Supporter',
    type: 'individual',
    description:
      'Access to software releases, my private GitHub repository & support in my Discord server.',
    prices: [
      {
        id: '123',
        created_at: new Date().toDateString(),
        modified_at: null,
        price_amount: 1900,
        price_currency: 'usd',
        type: 'recurring',
        recurring_interval: 'month',
        is_archived: false,
      },
    ],
    benefits: [
      {
        id: '123',
        description: 'Binary Downloads',
        type: 'downloadables',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '456',
        description: 'Private GitHub repository',
        type: 'github_repository',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '789',
        description: 'Discord Invite',
        type: 'discord',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
    ],
    created_at: new Date().toDateString(),
  },
  {
    name: 'Enterprise',
    type: 'business',
    description:
      'Exclusive support, exposure in weekly newsletter & premium role on Discord.',
    prices: [
      {
        id: '123',
        created_at: new Date().toDateString(),
        modified_at: null,
        price_amount: 299900,
        price_currency: 'usd',
        type: 'recurring',
        recurring_interval: 'month',
        is_archived: false,
      },
    ],
    benefits: [
      {
        id: '123',
        description: 'Logotype in Newsletter',
        type: 'articles',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '456',
        description: 'Private GitHub repository',
        type: 'github_repository',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '789',
        description: 'Premium Role on Discord',
        type: 'discord',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
    ],
    created_at: new Date().toDateString(),
  },
  {
    id: '123456',
    name: 'Lifetime Supporter',
    description:
      'Exclusive support, access to private repository & premium role on Discord.',
    benefits: [
      {
        id: '123',
        description: 'Logotype in Newsletter',
        type: 'articles',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '456',
        description: 'Private GitHub repository',
        type: 'github_repository',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '789',
        description: 'Premium Role on Discord',
        type: 'discord',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
    ],
    created_at: new Date().toDateString(),
    is_recurring: false,
    is_archived: false,
    organization_id: '123',
    medias: [
      /* {
        id: '123',
        created_at: new Date().toDateString(),
        public_url: '/assets/brand/polar_login.png',
        is_uploaded: false,
        service: 'product_media',
        mime_type: 'image/png',
        organization_id: '123',
        name: 'blend.png',
        path: '/assets/brand/polar_login.png',
        size: 123,
        size_readable: '123 B',
      }, */
    ],
    prices: [
      {
        id: '123',
        created_at: new Date().toDateString(),
        modified_at: null,
        price_amount: 99900,
        price_currency: 'usd',
        type: 'one_time',
        is_archived: false,
      },
    ],
  },
]

export const MOCKED_SUBSCRIPTIONS: (Partial<Product> & {
  type: SubscriptionTierType
})[] = [
  {
    name: 'Supporter',
    type: 'individual',
    description:
      'Access to software releases, license keys, my private GitHub repository & support in my Discord server.',
    prices: [
      {
        id: '123',
        created_at: new Date().toDateString(),
        modified_at: null,
        price_amount: 1900,
        price_currency: 'usd',
        type: 'recurring',
        recurring_interval: 'month',
        is_archived: false,
      },
    ],
    benefits: [
      {
        id: '456',
        description: 'Private GitHub repository',
        type: 'github_repository',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '789',
        description: 'Discord Support Channel',
        type: 'discord',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '852',
        description: 'License Key',
        type: 'license_keys',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '123',
        description: 'Binary Downloads',
        type: 'downloadables',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
    ],
    created_at: new Date().toDateString(),
  },
  {
    name: 'Startup',
    type: 'business',
    description:
      'Exclusive support, access to software releases & premium role on Discord.',
    prices: [
      {
        id: '123',
        created_at: new Date().toDateString(),
        modified_at: null,
        price_amount: 199900,
        price_currency: 'usd',
        type: 'recurring',
        recurring_interval: 'month',
        is_archived: false,
      },
    ],
    benefits: [
      {
        id: '456',
        description: 'Private GitHub repository',
        type: 'github_repository',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '123',
        description: 'Binary Downloads',
        type: 'downloadables',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '789',
        description: 'Premium Role on Discord',
        type: 'discord',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
    ],
    created_at: new Date().toDateString(),
  },
  {
    name: 'Enterprise',
    type: 'business',
    description:
      'Exclusive support, exposure in weekly newsletter & premium role on Discord.',
    prices: [
      {
        id: '123',
        created_at: new Date().toDateString(),
        modified_at: null,
        price_amount: 299900,
        price_currency: 'usd',
        type: 'recurring',
        recurring_interval: 'month',
        is_archived: false,
      },
    ],
    benefits: [
      {
        id: '123',
        description: 'Logotype in Newsletter',
        type: 'articles',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '456',
        description: 'Private GitHub repository',
        type: 'github_repository',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
      {
        id: '789',
        description: 'Premium Role on Discord',
        type: 'discord',
        created_at: new Date().toDateString(),
        modified_at: null,
        selectable: false,
        deletable: false,
        organization_id: '123',
      },
    ],
    created_at: new Date().toDateString(),
  },
]

export const MOCKED_WEBSITE_SUBSCRIPTION: Partial<Product> & {
  type: SubscriptionTierType
} = {
  name: 'Just an Example',
  type: 'individual',
  description:
    'Polar has no monthly fees. This tier is only an example of what you could offer your audience in minutes using Polar.',
  prices: [
    {
      id: '123',
      created_at: new Date().toDateString(),
      modified_at: null,
      price_amount: 900,
      price_currency: 'usd',
      type: 'recurring',
      recurring_interval: 'month',
      is_archived: false,
    },
  ],
  benefits: [
    {
      id: '456',
      description: 'Private GitHub repository',
      type: 'github_repository',
      created_at: new Date().toDateString(),
      modified_at: null,
      selectable: false,
      deletable: false,
      organization_id: '123',
    },
    {
      id: '789',
      description: 'Discord Support Channel',
      type: 'discord',
      created_at: new Date().toDateString(),
      modified_at: null,
      selectable: false,
      deletable: false,
      organization_id: '123',
    },
    {
      id: '852',
      description: 'License Key',
      type: 'license_keys',
      created_at: new Date().toDateString(),
      modified_at: null,
      selectable: false,
      deletable: false,
      organization_id: '123',
    },
    {
      id: '123',
      description: 'Binary Downloads',
      type: 'downloadables',
      created_at: new Date().toDateString(),
      modified_at: null,
      selectable: false,
      deletable: false,
      organization_id: '123',
    },
  ],
  created_at: new Date().toDateString(),
}
