function createCard(title, channelName, views, monthsOld, duration, thumbnail) {
    let HTML = `
    <div class="card">
        <div class="img">
          <img
            src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA"
          />
        </div>
        <div class="text">
          <h1>
            ${title}
          </h1>
          <p>${channelName}. ${views} . ${monthsOld}/p>
        </div>
      </div>
    `
}
createCard("Installing VS Code & How Website Works | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", "6.8M", "September 26, 2023", "31:19", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")