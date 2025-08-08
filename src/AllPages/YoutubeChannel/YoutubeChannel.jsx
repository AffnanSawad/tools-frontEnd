

const YoutubeChannel = () => {
    return (
        <div className="bg-orange-50 py-10">
        {/* Section Title */}
        <section className="text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold ">
            Visit our <span className="text-orange-400">YouTube Channel!</span>
          </h1>
        </section>
  
        {/* Video Grid */}
        <div className="video-container grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 py-10 place-items-center">
          <iframe
            className="w-full max-w-[500px] h-[280px] md:h-[315px]"
            src="https://www.youtube.com/embed/_hsFSlE7tBY?si=ph9iQBZjwUK-R0rs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
  
          <iframe
            className="w-full max-w-[500px] h-[280px] md:h-[315px]"
            src="https://www.youtube.com/embed/zoyf7aSTc7E?si=AperIdhanI22pLlv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
};

export default YoutubeChannel;