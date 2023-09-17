import { formAction } from "./formAction";
import { formActions } from "./formActions";
import { formContent } from "./formContent";
import FormRoot from "./formRoot";
import { FormTitle } from "./formTitle";

const Form = {
    Root: FormRoot,
    Title: FormTitle,
    Action: formAction,
    Actions: formActions,
    Content: formContent
}

export default Form