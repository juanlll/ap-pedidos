/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.notifications;

@com.tns.JavaScriptImplementation(javaScriptFile = "./services/NotificationIntentService.js")
public class NotificationIntentService extends android.app.IntentService implements com.tns.NativeScriptHashCodeProvider {
	public NotificationIntentService(java.lang.String param_0){
		super(param_0);
		com.tns.Runtime.initInstance(this);
	}

	protected void onHandleIntent(android.content.Intent param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onHandleIntent", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
