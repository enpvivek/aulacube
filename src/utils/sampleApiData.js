let ApiData = [
  {
    id: 1,
    text: "This is the first comment",
    user: "Alice",
    timestamp: "2024-02-25 10:00:00",
    replies: [
      {
        id: 4,
        text: "Replying to the first comment",
        user: "Bob",
        timestamp: "2024-02-25 10:05:00",
        replies: [
          {
            id: 7,
            text: "Nested reply to the first comment",
            user: "Charlie",
            timestamp: "2024-02-25 10:07:00",
            replies: [],
          },
        ],
      },
    ],
    starred: true,
  },
  {
    id: 2,
    text: "Another comment here",
    user: "Charlie",
    timestamp: "2024-02-25 10:10:00",
    replies: [
      {
        id: 5,
        text: "Replying to the second comment",
        user: "Dave",
        timestamp: "2024-02-25 10:15:00",
        replies: [],
      },
    ],
    starred: false,
  },
];

export default ApiData;
