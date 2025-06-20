const VaultClaimHeading = () => {
  return (
    <h1 
      className="relative mb-4 animate-pulse-slow-flash text-center text-5xl font-extrabold tracking-wider text-transparent
                 md:text-6xl"
    >
      <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text">
        VAULT CLAIM
      </span>
      <span 
        className="absolute top-0 left-0 h-full w-full animate-shine bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent"
      />
    </h1>
  );
};

export default VaultClaimHeading;