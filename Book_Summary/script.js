const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg",
      summary: [
        "Focus on 1% daily improvements to achieve significant change over time.",
        "Build systems, not goals, to maintain consistent growth.",
        "Habits form through cue, craving, response, and reward."
      ],
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      cover: "7 habits of highly effective people.jpg",
      summary: [
        "Be proactive and take responsibility for your actions.",
        "Begin with the end in mind to clarify your life goals.",
        "Put first things first—focus on what’s truly important."
      ],
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      cover: "The power of now.jpg",
      summary: [
        "Live in the present moment to reduce stress and anxiety.",
        "Observe your mind to overcome negative thought patterns.",
        "Surrender to the now and find inner peace."
      ],
    },
    {
      title: "How to Win Friends & Influence People",
      author: "Dale Carnegie",
      cover: "how to win friends.jpg",
      summary: [
        "Show genuine interest in others and listen attentively.",
        "Use a person’s name and offer sincere appreciation.",
        "Win arguments by avoiding them—focus on empathy and understanding."
      ],
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      cover: "Think and grow rich.jpg",
      summary: [
        "Define a clear goal and desire.",
        "Use visualization and belief to manifest success.",
        "Take consistent and deliberate action towards your goals."
      ],
    },
    {
      title: "You Are a Badass",
      author: "Jen Sincero",
      cover: "you are a badass.jpg",
      summary: [
        "Embrace your unique self and stop self-sabotaging.",
        "Trust in the universe and align yourself with your goals.",
        "Invest in personal growth and take bold actions."
      ],
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      cover: "The subtle art of not giving fuck.jpg",
      summary: [
        "Prioritize what truly matters in life.",
        "Accept your limitations and embrace discomfort.",
        "Focus on personal responsibility and values."
      ],
    },
    {
      title: "Man’s Search for Meaning",
      author: "Viktor E. Frankl",
      cover: "Man Search for Meaning.jpg",
      summary: [
        "Find purpose and meaning in suffering.",
        "Focus on what you can control in life.",
        "Choose a positive attitude despite circumstances."
      ],
    },
    {
      title: "Daring Greatly",
      author: "Brené Brown",
      cover: "Daring Greatly.jpg",
      summary: [
        "Embrace vulnerability to foster connection and growth.",
        "Let go of perfectionism and fear of failure.",
        "Show up wholeheartedly in your relationships and work."
      ],
    },
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      cover: "Mindset.jpg",
      summary: [
        "Adopt a growth mindset to embrace challenges.",
        "Learn from criticism and failures.",
        "Focus on effort and persistence over innate talent."
      ],
    },
    {
      title: "Grit: The Power of Passion and Perseverance",
      author: "Angela Duckworth",
      cover: "Grit.jpg",
      summary: [
        "Combine passion and perseverance for long-term success.",
        "Develop resilience in the face of adversity.",
        "Cultivate intrinsic motivation and practice daily improvement."
      ],
    },
    {
      title: "Can’t Hurt Me",
      author: "David Goggins",
      cover: "Can’t Hurt Me.jpg",
      summary: [
        "Push past mental and physical limits.",
        "Use past pain as a tool for personal growth.",
        "Embrace discomfort and discipline for transformation."
      ],
    },
    {
      title: "Essentialism: The Disciplined Pursuit of Less",
      author: "Greg McKeown",
      cover: "Essentialism.jpg",
      summary: [
        "Focus on what truly matters by eliminating the non-essential.",
        "Say no to distractions and prioritize effectively.",
        "Design a life centered around clarity and purpose."
      ],
    },
    {
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      cover: "The Four Agreements.jpg",
      summary: [
        "Be impeccable with your word.",
        "Don’t take anything personally.",
        "Don’t make assumptions and always do your best."
      ],
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      cover: "Deep Work.jpg",
      summary: [
        "Master the skill of focus in a distracted world.",
        "Prioritize deep, meaningful work over shallow tasks.",
        "Develop habits to reduce distractions and improve concentration."
      ],
    },
    {
      title: "The Happiness Project",
      author: "Gretchen Rubin",
      cover: "The Happiness Project.jpg",
      summary: [
        "Set realistic, measurable goals for happiness.",
        "Cultivate gratitude and find joy in small moments.",
        "Simplify your life by eliminating unnecessary stressors."
      ],
    },
    {
      title: "Make Your Bed",
      author: "Admiral William H. McRaven",
      cover: "Make Your Bed.jpg",
      summary: [
        "Start each day with small, meaningful wins.",
        "Adapt to challenges with courage and perseverance.",
        "Lead by example and create positive change."
      ],
    },
   
    
    {
      title: "The War of Art",
      author: "Steven Pressfield",
      cover: "The War of Art.jpg",
      summary: [
        "Overcome resistance to creative work.",
        "Embrace discipline and consistency in your craft.",
        "Turn pro by committing fully to your art."
      ],
    },
  ];


  // Function to create a book card (HTML) for each book
  function createBookCard(book) {
    const { title, author, cover, summary } = book;
  
    // Create outer col div
    const col = document.createElement("div");
    col.className = "col-md-4";
  
    // Create card
    const card = document.createElement("div");
    card.className = "card h-100";
  
    // Book cover image
    const img = document.createElement("img");
    img.src = cover;
    img.className = "card-img-top";
    img.alt = `${title} cover`;
  
    // Card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    // Card title
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;
  
    // Card author
    const cardAuthor = document.createElement("p");
    cardAuthor.className = "card-text text-muted";
    cardAuthor.textContent = `by ${author}`;
  
    // Summary container
    const summaryContainer = document.createElement("div");
    summaryContainer.className = "summary mt-3";
  
    // Convert summary array into list items
    const ul = document.createElement("ul");
    summary.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      ul.appendChild(li);
    });
    summaryContainer.appendChild(ul);
  
    // Toggle button
    const toggleButton = document.createElement("button");
    toggleButton.className = "btn btn-primary btn-toggle";
    toggleButton.textContent = "View Key Points";
  
    // Event listener to show/hide summary
    toggleButton.addEventListener("click", () => {
      if (summaryContainer.style.display === "none" || summaryContainer.style.display === "") {
        summaryContainer.style.display = "block";
        toggleButton.textContent = "Hide Key Points";
      } else {
        summaryContainer.style.display = "none";
        toggleButton.textContent = "View Key Points";
      }
    });
  
    // Append elements to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardAuthor);
    cardBody.appendChild(toggleButton);
    cardBody.appendChild(summaryContainer);
  
    // Append img and cardBody to card
    card.appendChild(img);
    card.appendChild(cardBody);
  
    // Append card to column
    col.appendChild(card);
  
    return col;
  }
  
  // Main function to render all book cards
  function renderBooks() {
    const bookList = document.getElementById("bookList");
    books.forEach((book) => {
      const bookCard = createBookCard(book);
      bookList.appendChild(bookCard);
    });
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", renderBooks);
    