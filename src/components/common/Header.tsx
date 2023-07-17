interface HeaderProps {
  title: string;
  location?: string;
}

export const Header = ({
  title = "Rates reader",
  location = "Worldwide",
}: HeaderProps) => {
  return (
    <header className="flex justify-between px-4 pt-4  ">
      <h2 className="text-3xl ">{title}</h2>
      <div className="flex items-center">
        <p>Location: {location}</p>
        <p>Date: today date</p>
        <img src="location-image.png" alt="Location" className="mr-2" />
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </header>
  );
};
