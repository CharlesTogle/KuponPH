# KuponPH MVP PRD

Status: Draft 1  
Date: 2026-05-26  
Note: This workspace is not a Git repository, so this PRD is stored locally instead of being submitted as a GitHub issue.

## Problem Statement

Filipino online shoppers currently discover coupons, flash deals, payday promos, and brand sales across scattered sources such as Reddit communities, coupon pages, Facebook pages, and store-specific campaign pages. The information is fragmented, inconsistent, and often expires quickly. A shopper who wants to save money on Shopee, Lazada, or TikTok Shop has to manually check multiple communities, social posts, and coupon pages just to understand which offers are still active, which brands are on sale, and which shops are currently worth visiting.

There is an opportunity to build a Philippines-focused coupon and sale repository that is free to access, mobile-first, SEO-friendly, and organized around the actual behavior of local shoppers: platform campaigns like `6.6`, `8.8`, `11.11`, and `PayDay Sale`; merchant categories like beauty, electronics, gaming, home, and travel; and brand-led sale events with dates and discount ranges. The site must balance freshness with trustworthiness because scraped content can be noisy, duplicated, or expired.

The core challenge is not only collecting data, but normalizing and verifying it well enough that users feel the site is useful and reliable. The product must also be operationally realistic: Reddit JSON is accessible and structured enough for automation, while Facebook and generic Google scraping are much more fragile and should not be treated as equal-quality automated sources in the first release.

## Solution

Build `KuponPH`, a free public website that aggregates and organizes active coupons, promo campaigns, and brand sale events for the Philippines. The initial focus is on three primary platform repositories:

- Shopee coupons
- Lazada coupons
- TikTok Shop coupons

The MVP will also support:

- A sale calendar and campaign pages for recurring shopping moments such as `2.2`, `3.3`, `4.4`, `5.5`, `6.6`, `7.7`, `8.8`, `9.9`, `10.10`, `11.11`, `12.12`, and `PayDay Sale`
- Brand sale listings with sale name, start date, end date, category, merchant or brand, and discount information such as `up to 70% off` or `15% off with cap`
- Top shops per category pages that help users discover which merchants currently have meaningful deals in categories such as fashion, beauty, electronics, food delivery, home, gaming, and travel

The product will ingest public data from Reddit JSON endpoints and selected coupon pages, normalize them into a structured Postgres schema, and expose them through SEO-friendly Next.js pages backed by a Fastify API. Because some suggested sources are operationally risky, the MVP will use a tiered ingestion strategy:

- Tier 1 automated sources: Reddit JSON endpoints and coupon pages that can be scraped reliably and legally
- Tier 2 semi-automated or manual sources: Facebook sale pages and Google-discovered brand sales

All content remains free to read. Monetization is through Google AdSense placements on high-intent pages such as platform coupon pages, category pages, and campaign pages.

## User Stories

1. As a Filipino online shopper, I want to see all active Shopee coupons on one page, so that I can save time before checking out.
2. As a Filipino online shopper, I want to see all active Lazada coupons on one page, so that I can compare current offers quickly.
3. As a Filipino online shopper, I want to see all active TikTok Shop coupons on one page, so that I can decide whether it is worth buying there today.
4. As a bargain hunter, I want coupon pages grouped by shopping platform, so that I do not have to scan mixed results from unrelated stores.
5. As a mobile shopper, I want a fast-loading site on my phone, so that I can check deals while browsing apps in real time.
6. As a shopper, I want each coupon to show the discount amount or percentage, so that I can judge value immediately.
7. As a shopper, I want each coupon to show start and end dates when available, so that I know whether it is still usable.
8. As a shopper, I want each coupon to show any minimum spend, cap, or restrictions, so that I do not waste time trying invalid promos.
9. As a shopper, I want each coupon to show its source link, so that I can verify where the information came from.
10. As a shopper, I want each coupon to show when it was last checked or updated, so that I can trust fresher deals more than stale ones.
11. As a shopper, I want to distinguish promo codes from automatic deals and sale announcements, so that I know what action to take.
12. As a shopper, I want to browse recurring campaign pages like `6.6`, `8.8`, and `PayDay Sale`, so that I can prepare for major shopping events.
13. As a shopper, I want to see upcoming sale dates before they happen, so that I can plan my purchases instead of buying too early.
14. As a shopper, I want brand sale entries with start date, end date, and discount range, so that I can prioritize the biggest opportunities.
15. As a shopper, I want to browse top shops by category, so that I can discover merchants worth checking even if I do not know brand names yet.
16. As a shopper, I want category pages for beauty, fashion, electronics, food and e-hailing, home and living, kids and toys, sports and outdoors, gaming, travel and hotels, and e-wallet offers, so that I can jump directly to my interests.
17. As a shopper, I want to sort deals by newest, expiring soon, and biggest discount, so that I can browse according to urgency or value.
18. As a shopper, I want to filter out expired deals, so that I am not misled by stale promotions.
19. As a shopper, I want duplicate deals merged into a single canonical entry, so that the site feels clean and trustworthy.
20. As a first-time visitor, I want full site access without signing up, so that I can use the product immediately.
21. As a search visitor, I want landing pages for sale events like `8.8 Sale Philippines` or `PayDay Sale vouchers`, so that I can find relevant deals directly from Google.
22. As a search visitor, I want merchant pages like `Lazada coupons` or `TikTok Shop promo codes`, so that I can land on a page specific to the brand I searched for.
23. As a search visitor, I want human-readable URLs and page titles, so that search results clearly match what I need.
24. As a shopper, I want disclaimers when a deal is unverified or community-sourced, so that I understand its confidence level.
25. As a shopper, I want to see whether a deal came from Reddit, a coupon source, or manual curation, so that I can interpret the data quality correctly.
26. As a content editor, I want newly scraped items to enter a review queue when parsing confidence is low, so that broken or misleading data does not go live automatically.
27. As a content editor, I want to approve, reject, or edit normalized coupon details, so that the public pages stay accurate.
28. As a content editor, I want to merge duplicate merchants, brands, and campaigns, so that taxonomy stays consistent over time.
29. As a content editor, I want to create manual brand sale entries from Facebook or web research, so that the site is not blocked by fragile scrapers.
30. As a content editor, I want to pin or feature selected deals, so that high-value promos appear above weaker ones.
31. As a site owner, I want a structured ingestion pipeline per source, so that failures in one connector do not break the whole system.
32. As a site owner, I want scrape logs and error states, so that I can detect when Reddit, Rappler, or other sources change format.
33. As a site owner, I want raw source payloads stored for audit and debugging, so that I can trace how a public entry was derived.
34. As a site owner, I want canonical entities for shops, brands, campaigns, and categories, so that SEO pages and rankings remain stable.
35. As a site owner, I want an algorithm for top shops per category, so that rankings are explainable and can improve over time.
36. As a site owner, I want ad placements on high-traffic pages, so that the free site can earn revenue through Google AdSense.
37. As a site owner, I want pages designed around SEO and internal linking, so that organic traffic can grow without paid acquisition.
38. As a site owner, I want clear attribution and compliance notes for sourced content, so that the product does not present third-party information as first-party claims.
39. As a site owner, I want source-specific freshness schedules, so that frequently changing coupon feeds are checked more often than slower-moving sale calendars.
40. As a site owner, I want the backend deployed on GCP with scheduled jobs, so that scraping and normalization can run reliably without a permanently managed server.

## Implementation Decisions

- The product is a public, no-login coupon and sale discovery site for Philippine shoppers. User accounts, saved deals, and notifications are not part of the MVP.
- The initial public information architecture will center on five page families:
  - Platform coupon pages for Shopee, Lazada, and TikTok Shop
  - Campaign pages for recurring sale events like `8.8`, `11.11`, and `PayDay Sale`
  - Category pages such as beauty, electronics, gaming, and home
  - Brand or shop pages for normalized merchants
  - A homepage that highlights active campaigns, featured deals, and top categories
- The public taxonomy will separate three concepts that users often mix together:
  - Platform: Shopee, Lazada, TikTok Shop
  - Campaign type: `8.8`, `PayDay Sale`, `Weekly Exclusive`, `Black Friday`, and similar moments
  - Merchant category: electronics, fashion, gaming, travel, and similar browsing dimensions
- The backend will treat coupons, sale deals, and brand sale events as related but distinct records:
  - Coupons and promo codes represent an offer users can apply or claim
  - Deals represent sale announcements or landing-page offers that may not have a code
  - Brand sale events represent time-bounded campaigns with dates and discount ranges
- Source ingestion will be modular. Each connector will fetch raw source records and hand them to a shared normalization pipeline instead of embedding business rules directly inside scrapers.
- The first automated connectors will target Reddit JSON endpoints for `r/ShopeePH`, `r/LazadaDealsPH`, and `r/TikTokshop`, plus selected coupon pages such as Rappler coupon pages where markup is stable enough to parse.
- Facebook pages and generic Google search results will not be treated as primary automated sources in MVP. They should enter through one of these safer patterns:
  - Manual editorial entry
  - Semi-automated discovery with human review
  - Official APIs or feeds if later available
- The PRD assumes direct Google SERP scraping is out of scope for MVP because it is brittle and high-risk from a terms and maintenance perspective.
- The PRD assumes automated Facebook scraping is also out of scope for MVP because public page markup, access restrictions, and anti-bot defenses make it unreliable for a core ingestion dependency.
- Every ingested source record will store:
  - Source type
  - Source URL
  - External identifier if available
  - Raw payload snapshot
  - Fetch timestamp
  - Parse status
  - Normalization confidence
- A normalization module will extract structured fields such as merchant name, platform, campaign, category, discount text, discount type, min spend, discount cap, coupon code, validity dates, and source attribution.
- Because many source titles will be noisy or semi-structured, normalization will support low-confidence outputs that require editorial review before publication.
- A canonical catalog module will maintain normalized entities for:
  - Merchants or shops
  - Brands
  - Categories
  - Platforms
  - Campaigns
  - Source publishers
- Duplicate detection will group near-identical coupons and sale posts using source identity, normalized merchant, validity window, and discount similarity. Public pages should show one canonical entry even if multiple sources mention the same deal.
- The ranking logic for top shops per category will begin with a transparent formula based on:
  - Number of active deals
  - Recency of last verified activity
  - Strength of discount signal
  - Editorial pinning weight
  - Optional click-through performance once analytics exists
- The ranking model should be simple and explainable in MVP, not a black-box scoring system.
- Freshness rules will vary by source and content type:
  - Reddit coupon sources should refresh frequently
  - Campaign pages should refresh daily or when new source items arrive
  - Manual brand sale entries should remain editable and reviewable
- Expiration logic will consider explicit end dates first. If no end date exists, the system should support a softer stale-state model rather than assuming permanent validity.
- Every public deal entry should expose a confidence or verification status such as:
  - Verified
  - Community-sourced
  - Expired
  - Pending review
- The Next.js frontend will prioritize SEO-friendly server-rendered or statically revalidated pages with strong metadata, structured headings, and internal linking between campaigns, categories, merchants, and platforms.
- The Fastify backend will expose internal and public APIs for:
  - Listing coupons and deals by platform, category, campaign, merchant, and freshness
  - Returning canonical detail pages
  - Triggering ingestion jobs
  - Managing moderation actions
  - Returning health and scrape status
- The backend deployment target is GCP. A Cloud Run based setup with scheduled triggers is the default assumption because it fits Fastify, periodic scraping, and low-ops startup needs.
- The database should be Postgres for MVP because the product needs relational joins, filtering, moderation workflows, deduplication, and future analytics that are easier to model in Postgres than in a SQLite-first distributed setup.
- Recommended database choice for MVP: Supabase Postgres, because it provides managed Postgres plus a convenient operator dashboard for moderation and manual data correction. This is especially helpful before a custom admin panel exists.
- Known tradeoff on Supabase Free: low free storage and inactivity pausing. If that becomes a problem, Neon is the most compatible fallback because it is also Postgres and supports scale-to-zero.
- Turso is not the recommended default for MVP even though its free tier is generous, because the product’s moderation, joins, aggregations, and canonical content model are a better fit for Postgres.
- The MVP should include a lightweight admin workflow. This can initially be handled through Supabase tooling plus protected backend actions rather than a full custom CMS.
- Revenue implementation is limited to AdSense placement strategy, not advanced monetization. Core ad surfaces are the homepage, platform pages, campaign pages, category pages, and merchant pages.
- The product should include clear disclaimers:
  - Coupon validity is not guaranteed
  - Source attribution is shown for every deal
  - Expiration and discount details may change on the merchant’s side
- The product name in this PRD is `KuponPH`, but branding can still change without affecting the information architecture.

## Testing Decisions

- A good test should validate externally observable behavior, not internal implementation details. For this product, that means testing what gets parsed, published, ranked, expired, filtered, and rendered rather than asserting how a specific scraper is internally written.
- Because the repository is currently empty, there is no existing testing prior art. The test approach should be established intentionally instead of copied from an existing suite.
- The highest-priority test targets for MVP are:
  - Source connector contract tests that verify a connector can turn a real or fixture-based source payload into raw ingest records
  - Normalization tests that verify titles and bodies are parsed into correct structured coupon or sale fields
  - Deduplication tests that verify similar records collapse into one canonical public entry
  - Expiration and freshness tests that verify items move correctly between active, stale, and expired states
  - Ranking tests that verify top shops per category follow the documented scoring rules
  - API tests that verify filters, sorting, and detail responses behave correctly for platform, category, campaign, and merchant pages
  - End-to-end tests for the main browse flows on the homepage, platform pages, category pages, and campaign pages
- Parser and normalization tests should use stable fixtures derived from representative Reddit and coupon page payloads. These tests should assert structured outputs, not brittle HTML selectors beyond what is needed for extraction.
- Scraper tests should avoid depending on live third-party websites in CI. Live source checks can exist as manual smoke tests or scheduled monitors, but the main automated suite should run against saved fixtures.
- Deduplication tests should cover false positives and false negatives because both are product risks:
  - False positives can hide distinct deals
  - False negatives can clutter pages with duplicates
- Ranking tests should use deterministic sample datasets so editorial pinning, freshness, and discount strength can be verified without flaky analytics dependencies.
- API tests should verify pagination, sorting, filters, canonical URLs, and confidence-state serialization.
- Frontend tests should prioritize user-visible outcomes such as correct page headings, deal cards, empty states, expiry badges, and source attribution labels.
- Monitoring and operational verification are also part of quality for this product. Ingest failures, empty fetches, parse-rate drops, and unusual duplicate spikes should be treated as alertable conditions even if they are not traditional unit tests.
- Assumption for MVP: tests are mandatory for ingestion, normalization, deduplication, and ranking modules first, because those modules carry the highest correctness risk and directly affect user trust.

## Out of Scope

- User accounts, wishlists, saved deals, and push or email notifications
- Checkout, redemption, or direct transaction processing
- A mobile app
- Browser extensions
- Full automation of Facebook sale page scraping
- Direct scraping of Google search result pages
- Affiliate network integrations beyond the initial AdSense model
- Advanced analytics-driven ranking before enough traffic data exists
- Merchant self-service dashboards
- Community submissions from end users
- International expansion outside the Philippine market
- Historical price tracking or deep price intelligence
- A full editorial CMS beyond the minimum moderation workflow needed to launch

## Further Notes

- The data model should preserve both raw source truth and normalized public truth. This is important because scraped content will change over time and debugging without stored raw payloads is painful.
- The distinction between `shop`, `merchant`, and `brand` should be normalized early. For MVP, `merchant` can be the canonical public concept, while `brand` can remain a related but separate concept for sale events where the sale is brand-led rather than platform-led.
- The homepage should not try to be a generic news portal. It should be optimized around high-intent shopping actions:
  - Check active platform coupons
  - See current campaign pages
  - Browse top categories
  - Discover featured brand sales
- `Top shops per category` still needs one product-level confirmation: whether this should be purely algorithmic, purely editorial, or a hybrid. This PRD assumes a hybrid model where algorithmic ranking is the baseline and editorial pinning can override important entries.
- `Brand sale` also needs one taxonomy confirmation: whether it includes only e-commerce brand campaigns or also physical retail and mall promotions. This PRD assumes digital-first coverage with room to add offline retail later.
- Source recommendations for the database were shaped by current official free-tier positioning:
  - Supabase Free includes a managed Postgres database with a 500 MB limit and pauses inactive projects after one week
  - Neon Free includes 0.5 GB storage per project and 100 CU-hours per project with scale-to-zero behavior
  - Turso Free includes 5 GB storage, but the product fit is weaker for this use case
- If you want the next step after this PRD, the clean follow-up is a tracer-bullet implementation plan for:
  - Schema and ingestion foundations
  - Public coupon and campaign pages
  - Moderation workflow
  - SEO and monetization hardening
