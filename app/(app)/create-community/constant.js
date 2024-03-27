export const tagLine = "Create a community that matters";

export const tagLineDescription =
	"Customize your community with a unique name and description.";

export const createCommunityFormFields = [
	{
		fieldName: "Name",
		placeholder: "Enter the name of your community",
		type: "text",
	},
	{
		fieldName: "Description",
		placeholder: "Enter the description of your community",
		type: "textarea",
	},
	{
		fieldName: "Category",
		type: "option",
		options: ["Technology", "Science", "Movies", "Music"],
	},
	{
		fieldName: "Enable member invitations",
		type: "checkbox",
	},
];

export const categoryGroupOptions = ["Technology", "Science", "Movies", "Music"]
