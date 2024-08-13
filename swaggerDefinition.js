/**
 * @swagger
 * components:
 *   schemas:
 *     Insight:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the insight.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation timestamp of the insight.
 *         postId:
 *           type: integer
 *           description: ID of the associated post.
 *           nullable: true
 *         commentId:
 *           type: integer
 *           description: ID of the associated comment.
 *           nullable: true
 *         perceivedBy:
 *           type: string
 *           description: Who perceived the insight.
 *           nullable: true
 *         textVector:
 *           type: string
 *           description: Vector representation of the text (unsupported type).
 *           nullable: true
 *         userId:
 *           type: integer
 *           description: ID of the associated user.
 *           nullable: true
 *         oceanScoreId:
 *           type: integer
 *           description: ID of the associated OCEAN score.
 *           nullable: true
 *         personType:
 *           type: string
 *           description: Type of person the insight refers to.
 *           nullable: true
 *         perception:
 *           type: string
 *           description: The perception related to the insight.
 *           nullable: true
 *         catchySubject:
 *           type: string
 *           description: A catchy subject for the insight.
 *           nullable: true
 *         why:
 *           type: string
 *           description: Reasoning behind the insight.
 *           nullable: true
 *         topics:
 *           type: array
 *           items:
 *             type: string
 *           description: Topics related to the insight.
 *         archived:
 *           type: boolean
 *           description: Indicates if the insight is archived.
 *           default: false
 *           nullable: true
 *         read:
 *           type: boolean
 *           description: Indicates if the insight has been read.
 *           default: false
 *           nullable: true
 *         starred:
 *           type: boolean
 *           description: Indicates if the insight is starred.
 *           default: false
 *           nullable: true
 *         highlightText:
 *           type: string
 *           description: Highlighted text within the insight.
 *           nullable: true
 *         shortSummary:
 *           type: string
 *           description: A short summary of the insight.
 *           nullable: true
 *         title:
 *           type: string
 *           description: Title of the insight.
 *           nullable: true
 *         isLiked:
 *           type: boolean
 *           description: Indicates if the insight is liked.
 *         feedBack:
 *           type: array
 *           items:
 *             type: string
 *           description: Feedback related to the insight.
 *         desiredPerceptionId:
 *           type: integer
 *           description: ID of the desired perception.
 *           nullable: true
 *       required:
 *         - topics
 *         - feedBack
 *     LinkedInUser:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the LinkedIn user.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the user was created.
 *         name:
 *           type: string
 *           description: Full name of the user.
 *           nullable: true
 *         about:
 *           type: string
 *           description: About section of the user.
 *           nullable: true
 *         causes:
 *           type: string
 *           description: Causes the user supports.
 *           nullable: true
 *         image:
 *           type: string
 *           description: URL of the user's profile image.
 *           nullable: true
 *         linkedInId:
 *           type: string
 *           description: LinkedIn ID of the user.
 *           nullable: true
 *         scraperVersion:
 *           type: integer
 *           description: Version of the scraper used.
 *           nullable: true
 *         shortId:
 *           type: string
 *           description: Short ID for the user.
 *           nullable: true
 *         referralCode:
 *           type: string
 *           description: Referral code for the user.
 *           nullable: true
 *         referredById:
 *           type: integer
 *           description: ID of the user who referred this user.
 *           nullable: true
 *         teamId:
 *           type: integer
 *           description: ID of the team the user belongs to.
 *           nullable: true
 *         kg:
 *           type: string
 *           description: Knowledge graph data.
 *           nullable: true
 *         firebaseId:
 *           type: string
 *           description: Firebase ID of the user.
 *           nullable: true
 *         firstName:
 *           type: string
 *           description: First name of the user.
 *           nullable: true
 *         gender:
 *           type: string
 *           enum: [HE, SHE, THEY]
 *           description: Gender of the user.
 *           default: HE
 *         lastName:
 *           type: string
 *           description: Last name of the user.
 *           nullable: true
 *         email:
 *           type: string
 *           description: Email address of the user.
 *           nullable: true
 *         isSubscribed:
 *           type: boolean
 *           description: Indicates if the user is subscribed.
 *           default: false
 *         reportId:
 *           type: string
 *           description: Report ID associated with the user.
 *           nullable: true
 *         Alert:
 *           type: array
 *           description: List of alerts associated with the user.
 *           items:
 *             $ref: '#/components/schemas/Alert'
 *         BigModelOutput:
 *           type: array
 *           description: List of big model outputs associated with the user.
 *           items:
 *             $ref: '#/components/schemas/BigModelOutput'
 *         comments:
 *           type: array
 *           description: List of comments made by the user.
 *           items:
 *             $ref: '#/components/schemas/Comment'
 *         DesiredPerception:
 *           type: array
 *           description: List of desired perceptions associated with the user.
 *           items:
 *             $ref: '#/components/schemas/DesiredPerception'
 *         education:
 *           type: array
 *           description: List of educational qualifications of the user.
 *           items:
 *             $ref: '#/components/schemas/Education'
 *         experience:
 *           type: array
 *           description: List of experiences of the user.
 *           items:
 *             $ref: '#/components/schemas/Experience'
 *         honors:
 *           type: array
 *           description: List of honors received by the user.
 *           items:
 *             $ref: '#/components/schemas/Honor'
 *         Insight:
 *           type: array
 *           description: List of insights associated with the user.
 *           items:
 *             $ref: '#/components/schemas/Insight'
 *         KnowledgeGraph:
 *           type: array
 *           description: List of knowledge graph data associated with the user.
 *           items:
 *             $ref: '#/components/schemas/KnowledgeGraph'
 *         languages:
 *           type: array
 *           description: List of languages spoken by the user.
 *           items:
 *             $ref: '#/components/schemas/Language'
 *         licenses:
 *           type: array
 *           description: List of licenses held by the user.
 *           items:
 *             $ref: '#/components/schemas/License'
 *         Team:
 *           $ref: '#/components/schemas/Team'
 *           items:
 *             $ref: '#/components/schemas/NewPerception'
 *         OceanScore:
 *           type: array
 *           description: List of ocean scores associated with the user.
 *           items:
 *             $ref: '#/components/schemas/OceanScore'
 *         posts:
 *           type: array
 *           description: List of posts made by the user.
 *           items:
 *             $ref: '#/components/schemas/Post'
 *         skills:
 *           type: array
 *           description: List of skills of the user.
 *           items:
 *             $ref: '#/components/schemas/Skill'
 *         volunteerings:
 *           type: array
 *           description: List of volunteering activities of the user.
 *           items:
 *             $ref: '#/components/schemas/Volunteering'
 *       required:
 *         - id
 *         - createdAt
 *         - gender
 *         - isSubscribed
 *     SourceNode:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the source node.
 *         node_id:
 *           type: string
 *           description: Identifier for the node.
 *         metadata:
 *           type: string
 *           description: Metadata related to the node.
 *         insightId:
 *           type: integer
 *           description: ID of the related insight.
 *         action:
 *           type: string
 *           description: Action associated with the source node.
 *         date:
 *           type: string
 *           format: date-time
 *           description: Date associated with the source node.
 *         linkToSource:
 *           type: string
 *           description: URL or link to the source of the node.
 *         summaryOfNode:
 *           type: string
 *           description: Summary of the source node.
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags associated with the source node.
 *       required:
 *         - node_id
 * 
 *     HighlightClick:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the highlight click.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the highlight click was created.
 *         highlightText:
 *           type: string
 *           description: Text of the highlight.
 *           nullable: true
 *         insightId:
 *           type: integer
 *           description: ID of the associated insight.
 *           nullable: true
 *         newPerceptionId:
 *           type: integer
 *           description: ID of the associated new perception.
 *           nullable: true
 * 
 *     NewPerception:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the new perception.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the new perception was created.
 *         userId:
 *           type: integer
 *           description: ID of the associated user.
 *           nullable: true
 *         text:
 *           type: string
 *           description: Text of the perception.
 *           nullable: true
 *         persona:
 *           type: string
 *           description: Persona of the perception.
 *           nullable: true
 *         summaryOfPerception:
 *           type: string
 *           description: Summary of the perception.
 *           nullable: true
 *         isPositive:
 *           type: boolean
 *           description: Indicates if the perception is positive.
 *           nullable: true
 *         insightId:
 *           type: integer
 *           description: ID of the associated insight.
 *           nullable: true
 *         highlightTexts:
 *           type: array
 *           description: List of associated highlight clicks.
 *           items:
 *             $ref: '#/components/schemas/HighlightClick'
 *         Insight:
 *           $ref: '#/components/schemas/Insight'
 *         LinkedInUser:
 *           $ref: '#/components/schemas/LinkedInUser'    
 *         MiniModelSummarisation:
 *           type: array
 *           description: List of mini model summarizations associated with the user.
 *           items:
 *             $ref: '#/components/schemas/MiniModelSummarisation'
 *         NewPerception:
 *           type: array
 *           description: List of new perceptions associated with the user.
 *     Comment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the comment.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the comment was created.
 *         text:
 *           type: string
 *           description: Content of the comment.
 *         userId:
 *           type: integer
 *           description: ID of the user who made the comment.
 *         sourceId:
 *           type: integer
 *           description: ID of the source related to the comment.
 *         ocean_deviation:
 *           type: string
 *           description: Deviation from the ocean score.
 *         sentiment_trend:
 *           type: string
 *           description: Sentiment trend of the comment.
 *     Reports:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the report.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the report was created.
 *         userId:
 *           type: string
 *           description: ID of the user associated with the report.
 *         reportId:
 *           type: string
 *           description: Unique identifier for the report itself.
 *     Experience:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the experience record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the experience record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         title:
 *           type: string
 *           description: Job title for the experience record.
 *           example: "Software Engineer"
 *         company:
 *           type: string
 *           description: Name of the company where the experience was gained.
 *           example: "Tech Solutions Inc."
 *         location:
 *           type: string
 *           description: Location of the company.
 *           example: "San Francisco, CA"
 *         start:
 *           type: string
 *           format: date-time
 *           description: Start date of the experience.
 *           example: "2022-01-01T00:00:00Z"
 *         end:
 *           type: string
 *           format: date-time
 *           description: End date of the experience. May be null if the experience is ongoing.
 *           example: "2024-08-01T00:00:00Z"
 *         userId:
 *           type: integer
 *           format: int32
 *           description: ID of the user associated with this experience record.
 *           example: 123
 *         user:
 *           $ref: '#/components/schemas/LinkedInUser'
 *     Honor:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the honor record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the honor record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         title:
 *           type: string
 *           description: Title of the honor or award.
 *           example: "Employee of the Year"
 *         issuer:
 *           type: string
 *           description: Organization or person who issued the honor.
 *           example: "Tech Solutions Inc."
 *         issueDate:
 *           type: string
 *           format: date-time
 *           description: Date when the honor was issued.
 *           example: "2024-01-15T00:00:00Z"
 *         userId:
 *           type: integer
 *           format: int32
 *           description: ID of the user associated with this honor record.
 *           example: 123
 *         description:
 *           type: string
 *           description: Additional details about the honor.
 *           example: "Awarded for outstanding performance in the software development team."
 *         user:
 *           $ref: '#/components/schemas/LinkedInUser'
 *     Language:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the language record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the language record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         language:
 *           type: string
 *           description: Name of the language.
 *           example: "English"
 *         proficiency:
 *           type: string
 *           description: Proficiency level in the language.
 *           example: "Fluent"
 *         userId:
 *           type: integer
 *           format: int32
 *           description: ID of the user associated with this language record.
 *           example: 123
 *         user:
 *           $ref: '#/components/schemas/LinkedInUser'
 *     License:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the license record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the license record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         name:
 *           type: string
 *           description: Name of the license.
 *           example: "Certified Scrum Master"
 *         issuingOrganization:
 *           type: string
 *           description: Organization that issued the license.
 *           example: "Scrum Alliance"
 *         issueDate:
 *           type: string
 *           format: date-time
 *           description: Date when the license was issued.
 *           example: "2024-01-15T00:00:00Z"
 *         expirationDate:
 *           type: string
 *           format: date-time
 *           description: Date when the license expires.
 *           example: "2026-01-15T00:00:00Z"
 *         credentialId:
 *           type: string
 *           description: Identifier for the license credential.
 *           example: "CSM123456"
 *         credentialUrl:
 *           type: string
 *           description: URL where the license credential can be verified.
 *           example: "https://example.com/verify/CSM123456"
 *         userId:
 *           type: integer
 *           format: int32
 *           description: ID of the user associated with this license record.
 *           example: 123
 *         user:
 *           $ref: '#/components/schemas/LinkedInUser'
 *     Skill:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the skill record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the skill record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         skill:
 *           type: string
 *           description: Name of the skill.
 *           example: "JavaScript"
 *         userId:
 *           type: integer
 *           format: int32
 *           description: ID of the user associated with this skill record.
 *           example: 123
 *         user:
 *           $ref: '#/components/schemas/LinkedInUser'
 *     Volunteering:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the volunteering record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the volunteering record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         role:
 *           type: string
 *           description: Role held during the volunteering.
 *           example: "Volunteer Coordinator"
 *         organization:
 *           type: string
 *           description: Organization where the volunteering took place.
 *           example: "Local Animal Shelter"
 *         cause:
 *           type: string
 *           description: Cause supported through volunteering.
 *           example: "Animal Welfare"
 *         start:
 *           type: string
 *           format: date-time
 *           description: Start date of the volunteering role.
 *           example: "2024-01-01T00:00:00Z"
 *         end:
 *           type: string
 *           format: date-time
 *           description: End date of the volunteering role.
 *           example: "2024-12-31T00:00:00Z"
 *         userId:
 *           type: integer
 *           format: int32
 *           description: ID of the user associated with this volunteering record.
 *           example: 123
 *         user:
 *           $ref: '#/components/schemas/LinkedInUser'
 *     SentimentClassification:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the sentiment classification record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the sentiment classification record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         text:
 *           type: string
 *           description: Text that was classified.
 *           example: "The product was fantastic!"
 *         sentiment:
 *           type: string
 *           description: Sentiment classification of the text.
 *           example: "Positive"
 *         score:
 *           type: number
 *           format: float
 *           description: Sentiment score assigned to the text.
 *           example: 0.95
 *         postId:
 *           type: integer
 *           format: int32
 *           description: ID of the post associated with this sentiment classification.
 *           example: 123
 *         commentId:
 *           type: integer
 *           format: int32
 *           description: ID of the comment associated with this sentiment classification.
 *           example: 456
 *         byModel:
 *           type: string
 *           description: Model that generated the sentiment classification.
 *           example: "SentimentAnalysisModelV2"
 *         isRedFlag:
 *           type: boolean
 *           description: Whether the sentiment is flagged as a red flag.
 *           example: false
 *         inputVector:
 *           type: string
 *           description: Input vector used for sentiment analysis.
 *           example: "[0.1, 0.2, 0.3]"
 *         outputVector:
 *           type: string
 *           description: Output vector generated by the sentiment analysis model.
 *           example: "[0.2, 0.3, 0.4]"
 *         comment:
 *           $ref: '#/components/schemas/Comment'
 *         post:
 *           $ref: '#/components/schemas/Post'
 *     EntityClassification:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the entity classification record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the entity classification record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         text:
 *           type: string
 *           description: Text that was classified.
 *           example: "John Doe"
 *         type:
 *           type: string
 *           description: Type of entity classified.
 *           example: "Person"
 *         postId:
 *           type: integer
 *           format: int32
 *           description: ID of the post associated with this entity classification.
 *           example: 123
 *         commentId:
 *           type: integer
 *           format: int32
 *           description: ID of the comment associated with this entity classification.
 *           example: 456
 *         byModel:
 *           type: string
 *           description: Model that generated the entity classification.
 *           example: "EntityRecognitionModelV1"
 *         isPersonalInfo:
 *           type: boolean
 *           description: Whether the classified entity is considered personal information.
 *           example: false
 *         isRedFlag:
 *           type: boolean
 *           description: Whether the entity is flagged as a red flag.
 *           example: false
 *         inputVector:
 *           type: string
 *           description: Input vector used for entity classification.
 *           example: "[0.1, 0.2, 0.3]"
 *         outputVector:
 *           type: string
 *           description: Output vector generated by the entity classification model.
 *           example: "[0.2, 0.3, 0.4]"
 *         comment:
 *           $ref: '#/components/schemas/Comment'
 *         post:
 *           $ref: '#/components/schemas/Post'
 *     StyleClassification:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the style classification record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the style classification record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         text:
 *           type: string
 *           description: Text that was classified.
 *           example: "This is a formal document."
 *         style:
 *           type: string
 *           description: Style classification of the text.
 *           example: "Formal"
 *         postId:
 *           type: integer
 *           format: int32
 *           description: ID of the post associated with this style classification.
 *           example: 123
 *         commentId:
 *           type: integer
 *           format: int32
 *           description: ID of the comment associated with this style classification.
 *           example: 456
 *         byModel:
 *           type: string
 *           description: Model that generated the style classification.
 *           example: "StyleAnalysisModelV1"
 *         inputVector:
 *           type: string
 *           description: Input vector used for style classification.
 *           example: "[0.1, 0.2, 0.3]"
 *         outputVector:
 *           type: string
 *           description: Output vector generated by the style classification model.
 *           example: "[0.2, 0.3, 0.4]"
 *         comment:
 *           $ref: '#/components/schemas/Comment'
 *         post:
 *           $ref: '#/components/schemas/Post'
 *     Team:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: Unique identifier for the team record.
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the team record was created.
 *           example: "2024-08-13T12:34:56Z"
 *         name:
 *           type: string
 *           description: Name of the team.
 *           example: "Development Team"
 *         User:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/LinkedInUser'
 *           description: List of users associated with this team.
 *     Education:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the education record.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the education record was created.
 *         school:
 *           type: string
 *           description: Name of the school or institution.
 *         degree:
 *           type: string
 *           description: Degree obtained from the institution.
 *         field:
 *           type: string
 *           description: Field of study.
 *         start:
 *           type: string
 *           format: date-time
 *           description: Start date of the education period.
 *         end:
 *           type: string
 *           format: date-time
 *           description: End date of the education period.
 *         userId:
 *           type: integer
 *           description: ID of the user associated with this education record.
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the post.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the post was created.
 *         text:
 *           type: string
 *           description: Content of the post.
 *         userId:
 *           type: integer
 *           description: ID of the user who created the post.
 *         comments:
 *           type: integer
 *           description: Number of comments on the post.
 *         postDate:
 *           type: string
 *           format: date-time
 *           description: Date when the post was made.
 *         isRepost:
 *           type: boolean
 *           description: Indicates if the post is a repost.
 *         reposts:
 *           type: integer
 *           description: Number of reposts of the post.
 *         likes:
 *           type: integer
 *           description: Number of likes on the post.
 *         sourceId:
 *           type: integer
 *           description: ID of the source related to the post.
 *         analysed:
 *           type: boolean
 *           description: Indicates if the post has been analysed.
 *         link:
 *           type: string
 *           description: Link to the post.
 * 
 *     MiniModelSummarisation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the mini model summarisation.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the mini model summarisation was created.
 *         text:
 *           type: string
 *           description: Text content of the mini model summarisation.
 *         model:
 *           type: string
 *           description: Name of the model used for summarisation.
 *         postId:
 *           type: integer
 *           description: ID of the related post.
 *         commentId:
 *           type: integer
 *           description: ID of the related comment.
 *         userAbout:
 *           type: string
 *           description: Description about the user.
 *         userId:
 *           type: integer
 *           description: ID of the user who created the summarisation.
 *         inputVector:
 *           type: string
 *           description: Input vector used for the summarisation (this field is unsupported but included for completeness).
 *         outputVector:
 *           type: string
 *           description: Output vector generated by the model (this field is unsupported but included for completeness). 
 * 
 * 
 *
 * /insights:
 *    get:
 *     summary: Retrieve a list of insights
 *     tags: [Insight]
 *     responses:
 *       200:
 *         description: A list of insights.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Insight'
 *    post:
 *     summary: Create a new insight
 *     tags: [Insight]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Insight'
 *     responses:
 *       201:
 *         description: The created insight.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Insight'
 * 
 * /insights/{userId}:
 *    get:
 *     summary: Retrieve all insights for a specific user
 *     tags: [Insight]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: A list of insights for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Insight'
 *       404:
 *         description: User not found or no insights available
 * 
 * /insights/insight/{id}:
 *    get:
 *     summary: Retrieve a specific insight by its ID
 *     tags: [Insight]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the insight
 *     responses:
 *       200:
 *         description: The requested insight
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Insight'
 *       404:
 *         description: Insight not found
 * 
 * /newPerceptions:
 *    get:
 *     summary: Retrieve a list of all new perceptions
 *     tags: [NewPerception]
 *     responses:
 *       200:
 *         description: A list of new perceptions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NewPerception'
 *       500:
 *         description: Internal server error
 *    post:
 *     summary: Create a new highlight click
 *     tags: [NewPerception]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewPerception'
 *     responses:
 *       201:
 *         description: New perception created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewPerception'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 * 
 * /highlightClicks:
 *    get:
 *     summary: Retrieve a list of all highlight clicks
 *     tags: [HighlightClick]
 *     responses:
 *       200:
 *         description: A list of highlight clicks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HighlightClick'
 *       500:
 *         description: Internal server error
 *    post:
 *     summary: Create a new highlight click
 *     tags: [HighlightClick]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HighlightClick'
 *     responses:
 *       201:
 *         description: Highlight click created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HighlightClick'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 * 
 * /sourceNodes:
 *   get:
 *     summary: Retrieve a list of all source nodes
 *     tags: [SourceNode]
 *     responses:
 *       200:
 *         description: A list of source nodes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SourceNode'
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new source node
 *     tags: [SourceNode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SourceNode'
 *     responses:
 *       201:
 *         description: Source node created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SourceNode'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

module.exports = {};