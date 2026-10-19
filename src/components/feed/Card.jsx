import AnimeCard from './pfp'

const Card = () => {
  const details = [
    {
      name: "attack on tatan ",
      desc: " goated anime koi taakkar nhi ",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FjQ91rAsQZtBoKRhQZ406Hj-GDj9GCR08gMxPylxfw&s=10",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigobSp1b1DRmp6xeC4hcycUCRnUXcP3XQTxdkHxd14w&s=10",
      episodes: 91,
      cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzfPvwBw_Uw5aEIhLV9h201SrcSk7WQAsut5rlPvVRA&s=10"

    },
     {
      name: "Rezero ",
      desc: " rezero og anime  ",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFxQhIz5pvyeGAjTZ2dCCVYIQePFHgezHlIc_uLaKBg&s=10",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8gdJqRqQWE4dEeajvyAf76kXPiZTS3lbtgjRHSNxXIw&s=10",
      episodes: 60,
      cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5o8vSkfWRTcZS3oOYTYmtqsyD4rOLDg0Jr2GQJ2VpA&s=10"

    }
  ]
  return (
    <div className="grid">
          {details.map((e, i) => (
            <AnimeCard key={i} {...e} />
          ))}
      </div>
  )
}

export default Card
