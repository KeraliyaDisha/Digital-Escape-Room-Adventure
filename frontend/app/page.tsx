import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Mind-Bending Puzzles",
      description:
        "Challenge yourself with our collection of logic puzzles, riddles, and cryptographic challenges that will put your problem-solving skills to the test.",
    },
    {
      title: "Multiplayer Experience",
      description:
        "Team up with friends or join random players to solve mysteries together. Communication and collaboration are key to escape!",
    },
    {
      title: "Race Against Time",
      description:
        "Can you beat the clock? Each room has a time limit, adding an extra layer of excitement to your escape attempts.",
    },
  ];

  const rooms = [
    {
      title: "The Ancient Temple",
      difficulty: "Medium",
      players: "2-4",
      timeLimit: "60 minutes",
      description:
        "Uncover the secrets of a long-lost civilization and escape before the temple crumbles.",
    },
    {
      title: "Cyber Security Breach",
      difficulty: "Hard",
      players: "1-3",
      timeLimit: "45 minutes",
      description:
        "Hack your way through a compromised system before the virus spreads.",
    },
    {
      title: "Victorian Mystery",
      difficulty: "Easy",
      players: "2-5",
      timeLimit: "50 minutes",
      description: "Solve a classic whodunit in an elegant Victorian mansion.",
    },
  ];

  return (
    <>
      <div className="min-h-screen text-white">
        <div className="container mx-auto px-6 py-48 text-center relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#387478] to-[#9bd3d7]">
              Ready to Escape?
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-300">
              Dive into a dynamic, web-based escape room where every playthrough
              offers a new challenge.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#387478] text-white font-bold py-4 px-8 rounded-full hover:bg-[#559196] transition-all transform hover:scale-105">
                Play Now
              </button>
              <Link
                href="/auth/signin"
                className="bg-transparent border-2 border-[#387478] text-white font-bold py-4 px-8 rounded-full hover:bg-[#387478] transition-all"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Available Rooms Section */}
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-center mb-16">
            Available Escape Rooms
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{room.title}</h3>
                <div className="mb-4 text-sm">
                  <p className="text-indigo-300">
                    Difficulty: {room.difficulty}
                  </p>
                  <p className="text-indigo-300">Players: {room.players}</p>
                  <p className="text-indigo-300">Time: {room.timeLimit}</p>
                </div>
                <p className="text-gray-300 mb-6">{room.description}</p>
                <button className="flex items-center text-indigo-300 hover:text-white transition-colors">
                  Start Room &gt;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
